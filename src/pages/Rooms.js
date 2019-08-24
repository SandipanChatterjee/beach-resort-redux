import React from 'react'
import Navbar from '../components/navbar';
import RoomsListing from '../components/roomsListing';
import Banner from '../components/Banner';
import room2 from '../assests/images/room-2.jpeg'
import {Link} from 'react-router-dom'
import Container from '../components/Container';
function Rooms() {
    return (
        <div>
            <Navbar/>
            <Container className="container">
                <img src={room2} className="room-header-image"/>
                <Banner 
                    className="centered" 
                    title="our rooms" 
                    subtitle="deluxe rooms starting at $299">
                        <Link to="/" className="btn-primary">return home</Link>
                </Banner>
            </Container>
            <RoomsListing />
        </div>
    )
}

export default Rooms
