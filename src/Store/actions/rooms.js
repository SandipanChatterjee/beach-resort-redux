import * as actionTypes from './actionsType'
import Client from '../../Contentful'

export const roomsSuccess = (rooms) => {
    return{
        type : actionTypes.ADD_ROOMS_SUCCESS,
        rooms : rooms
    }
    
}

export const rooms = () => {
    return dispatch => {
        Client.getEntries()
        .then(res =>{
            // console.log(res)
            const rooms = res.items.map(item => item.fields)
            dispatch(roomsSuccess(rooms))
        })
    }
}