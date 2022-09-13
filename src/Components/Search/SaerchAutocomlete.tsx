import PlacesAutocomplete from 'react-places-autocomplete';
import Col from 'react-bootstrap/Col';

const SearchAutocomplete = ({address, setAddress, onSetAddressState}) => {

    return <PlacesAutocomplete value={address} onChange={setAddress} onSelect={onSetAddressState}>
    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) =>
        <Col xs={12} md={6} className="search-form__group">
            <p className="search-form__title">Where to looking for?</p>
            <input {...getInputProps({ placeholder: "Type a city" })}  className="form-input"/>
            <div>
                {loading ? <div>...loading</div> : null}
                {suggestions.map(suggestion => {
                    const style = {
                        backgroundColor: suggestion.active ? 'blue' : "#fff"
                    }

                    return <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                    </div>
                })}
            </div>
        </Col>
    }
</PlacesAutocomplete>
}

export default SearchAutocomplete;