import React from 'react'
import Navbar from '../components/navbar';
import Banner from '../components/Banner';
import defaultImg from '../assests/images/defaultBcg.jpeg'
import {Link} from 'react-router-dom'
import Container from '../components/Container';
import Services from '../components/Services';
import FeaturedRooms from '../components/featuredrooms'
function Home() {
    return (
        <>
           <Navbar />  
           <Container className="container">
                <img src={defaultImg} alt="defaultImg" className="default-image" />
                <Banner 
                        className="centered" 
                        title="luxurious rooms" 
                        subtitle="deluxe rooms starting at $299">
                            <Link to="/rooms" className="btn-primary">our rooms</Link>   
                </Banner>
           </Container>
           <Services/>
           <FeaturedRooms />
        </>
    )
}

export default Home
