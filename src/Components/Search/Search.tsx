import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { useNavigate, createSearchParams } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import './Search.sass';

import SittersService from '../../services/SittersService';
import { updateSearchList } from '../../actions';
import { Coordinates, SearchParams } from '../../interfaces/search.interface';
import SearchAutocomplete from './SaerchAutocomlete';
import SearchHeader from './SearchHeader';
import SearchSizeOfDog from './SearchSizeOfDog';
import SearchDates from './SearchDates';

const Search = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const [selected, setSelected] = useState('walking');
    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState<Coordinates>({
        lat: null,
        lng: null
    })

    const sittersService = new SittersService();
    
    useEffect(()=>{})

    const onSetAddressState = async (value: any) => {
        const result = await geocodeByAddress(value);
        const latLng: Coordinates = await getLatLng(result[0]);
        setAddress(value);
        setCoordinates(latLng);

    }

    const onSittersFilter = (res: any) => {
        const searchResult = res.filter((item: any) => {
            const filter = item.services[selected] === true && item.location.coordinates.lat === coordinates.lat
                && item.location.coordinates.lng === coordinates.lng;
            return filter

        })
        dispatch(updateSearchList(searchResult));
        const searchParams: SearchParams = {
            lat: coordinates.lat.toString(),
            lng: coordinates.lng.toString(),
            selected,
            address
        }
        navigate({
            pathname: '/search',
            search: `?${createSearchParams({ ...searchParams })}`,
        });
        
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(event.target.value);
    };

    const onSubmittoSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sittersService
            .getAllSitters()
            .then(res => onSittersFilter(res))
    }

    return (
        <>
        <h2>We will take care while you are away</h2>
        <div className='search-wrapper'>
            <form className="search-form" onSubmit={onSubmittoSearch}>
                <SearchHeader selected={selected} handleChange={handleChange} />
                <Container className="search-form__body">
                <Row>
                    <SearchAutocomplete address={address} setAddress={setAddress} onSetAddressState={onSetAddressState} />
                    <SearchDates/>
                
                    <SearchSizeOfDog/>
                    <Col xs={12} md={6} className="search-form__group">
                        <button className="btn-blue" type="submit" >Choose a dog sitter</button>
                    </Col>
                </Row>
                </Container>
            </form>
        </div>
        </>
    )
}

export default Search;