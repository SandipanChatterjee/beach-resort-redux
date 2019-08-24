import React from 'react'
import Container from '../components/Container';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
const Error = () => {
    return (
        <Container className="container">
            <img src={null} className="default-image" />
            <Banner 
                className="centered"
                title="404 Page not found">
                <Link to="/" className="btn-primary">back to home</Link>
            </Banner>
        </Container>
    )
}

export default Error
