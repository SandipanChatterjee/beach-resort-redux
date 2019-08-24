import React, { Component } from 'react'
import * as action from '../Store/actions/index'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class RoomsListing extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : '',
            filter : false,
            dataType : ''
        }
    }
    componentDidMount(){
        this.props.getRooms()
    }
    handlechange = (event,dataType) => {
        this.setState({value : event.target.value,filter:true,dataType : dataType});
    }
    render() {
        const {rooms} = this.props
        const {filter,dataType} = this.state
        let filteredPropertise;
        
        if(filter && dataType == 'type'){
            filteredPropertise = rooms.filter(item => item.type == this.state.value)
        }

        if(filter && dataType == 'capacity'){
            filteredPropertise = rooms.filter(item => item.capacity == this.state.value)
        }

        console.log(filteredPropertise);
        const list = (
            <div>
                <div className="section-items wrap">
                {
                   !(filter) ? rooms.map((items,id)=>{
                        return(
                            <>
                                <div key={id} className="featured-image-container">
                                    <img src={items.images[0].fields.file.url} alt="images-list" className="featured-image" />
                                    <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                                    <Link to={{
                                        pathname : "/single-room/",
                                        state : {name : items.name}
                                    }} className="btn-primary">our rooms</Link>
                                    </div>
                                </div>
                            </>
                           
                        )
                    }) : 
                    filteredPropertise.map((items,id) => {
                        return(
                            <>
                                 <div key={id} className="featured-image-container">
                                    <img src={items.images[0].fields.file.url} alt="images-list" className="featured-image" />
                                    <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                                    <Link to={{
                                        pathname : "/single-room/",
                                        state : {name : items.name}
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
        return (
            <>
                <p className="title">rooms</p>
                <div style={{marginBottom:'10%',display:'flex',flexDirection:'row',justifyContent:'space-between',marginLeft:'5%',marginRight:'7%'}}>
                    <div style={{width: '40%',marginRight:'5%'}}>
                        <p>Room type</p>
                        <select value={this.state.value} onChange={(event) => this.handlechange(event,'type')}>
                            <option value="single">single</option>
                            <option value="double">double</option>
                            <option value="family">family</option>
                            <option value="presidential">presidential</option>
                            {/* <option value="mango">Mango</option> */}
                        </select>
                    </div>
                    <div style={{width: '40%',marginLeft:'5%'}}>
                        <p>Capacity</p>
                        <select value={this.state.value} onChange={(event) => this.handlechange(event,'capacity')}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>
                { list }
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
       getRooms : () => {dispatch(action.rooms())} 
    }
}

const mapStateToProps = state => {
    return{
        rooms : state.RoomsReducer.rooms
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RoomsListing)
