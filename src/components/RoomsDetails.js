import React, { Component } from 'react'
import Rooms from '../pages/Rooms';
import {connect} from 'react-redux'
import {withRouter,Link} from 'react-router-dom'
import Navbar from './navbar';
import RoomsListing from './roomsListing';
import * as action from '../Store/actions/index'

class RoomsDetails extends Component {
    componentDidMount(){
        this.props.getRooms()
    }
    render() {
        const {room} = this.props;
        console.log(room)
        //EXP 
        // const {featuredRooms} = this.props

        const name = this.props.history.location.state.name
        const filteredRoom = room.filter(item => item.name === name)
        return (
            <div>
                <Navbar />
                {
                    name ?
                    filteredRoom.map((item,id) => {
                        return(
                            <>
                                <div className="container">
                                    <img src={item.images[0].fields.file.url} alt="defaultBcg" className="room-header-image" />
                                    <div className="centered">
                                        <p className="h1">{item.name}</p>
                                        <p className="h2" />
                                        <Link to="/" className="btn-primary">return home</Link>
                                    </div>
                                </div>
                                <div style={{padding: '0% 5%'}}>
                                    <div className="section-items">
                                        <div className="featured-image-container">   
                                        <img src={item.images[1].fields.file.url} className="featured-image" />
                                        </div>
                                        <div className="featured-image-container">   
                                        <img src={item.images[2].fields.file.url} className="featured-image" />
                                        </div>
                                        <div className="featured-image-container">   
                                        <img src={item.images[3].fields.file.url} className="featured-image" />
                                        </div>
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row'}}>
                                        <div className="room-details">
                                        <h2 style={{letterSpacing: 3, marginBottom: 10}}>Details</h2>
                                        <p>{item.description}</p>
                                        </div>
                                        <div className="room-details">
                                        <h2 style={{letterSpacing: 3, marginBottom: 10}}>Info</h2>
                                        <p style={{letterSpacing: 3, margin: '3% 0%'}}>Price : {item.price} </p>
                                        <p style={{letterSpacing: 3, margin: '5% 0%'}}>Szie : {item.size} SQFT</p>  
                                        <p style={{letterSpacing: 3, margin: '5% 0%'}}>Capacity : {item.capacity}</p>    
                                        <p style={{letterSpacing: 3, margin: '5% 0%'}}>{item.pets ? 'Pets Allowed' : 'Pets Not Allowed'}</p>    
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{margin: '3% 6%'}}>
                                        <h2 style={{letterSpacing: 3, marginBottom: 10}}>Extras</h2>
                                        <div style={{display: 'flex', flexDirection: 'row'}}>
                                            <p style={{margin: '5px 0%'}}>-{item.extras[0]} </p>
                                            <p style={{margin: '5px 0%'}}>-{item.extras[1]}</p>  
                                            <p style={{margin: '5px 0%'}}>-{item.extras[2]}</p>    
                                        </div>
                                        <div style={{display: 'flex', flexDirection: 'row'}}>
                                            <p style={{margin: '5px 0%'}}>-{item.extras[3]} </p>
                                            <p style={{margin: '5px 0%'}}>-{item.extras[4]}</p>  
                                            <p style={{margin: '5px 0%'}}>-{item.extras[5]}</p>    
                                        </div>
                                        <div style={{display: 'flex', flexDirection: 'row'}}>
                                            <p style={{margin: '5px 0%'}}>-{item.extras[6]}</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }) : <RoomsListing />
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        room : state.RoomsReducer.rooms
    }   
}
const mapDisptachToProps = disptach => {
    return{
        getRooms : () => disptach(action.rooms())
    }
}
export default connect(mapStateToProps,mapDisptachToProps)(withRouter(RoomsDetails))