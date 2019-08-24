import React, { Component } from 'react'
import * as action from '../Store/actions/index'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class Featuredrooms extends Component {
    componentDidMount(){
        this.props.getfeaturedRooms();
        //++ EXP
        this.props.getRooms()
    }
    render() {  
        
        const{featuredRooms} = this.props
        // console.log(featuredRooms)
        return (
            <div>
                <p className="title">featured rooms</p>
                <div className="section-items">
                    {
                        featuredRooms.map((item,id) => {
                            return(
                                <>
                                    <div className="featured-image-container" key={id}>   
                                        <img src={item.images[0].fields.file.url} alt="defaultImg" className="featured-image image" />
                                        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                                            <Link to={{
                                                pathname : "/single-room",
                                                state : {name : item.name}
                                                }} className="btn-primary">our rooms</Link>
                                        </div>
                                    </div>
                                </>
                            )   
                            
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        featuredRooms : state.RoomsReducer.featuredRooms
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getfeaturedRooms : () => dispatch(action.featuredRooms()),
        //++ EXP
        getRooms : () => dispatch(action.rooms())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Featuredrooms) 
