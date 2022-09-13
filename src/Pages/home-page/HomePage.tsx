import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Search from '../../Components/Search/Search';
import './HomePage.sass';

const HomePage = () => {
    return(
        <div className='main__wrapper'>
            <Container>
                <h1>Reliable dog sitters and dog walkers in your area</h1> 
                <Search/>
            </Container>
        </div>
    )

}

export default HomePage;