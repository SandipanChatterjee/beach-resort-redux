import * as actionTypes from './actionsType'
import Client from '../../Contentful'
export const featuredRoomsSuccess = (featuredRooms) => {
    return{
        type: actionTypes.Add_Featured_Rooms_Success,
        featuredRooms : featuredRooms
    }
}
export const featuredRooms = () =>{
    return dispatch => {
       Client.getEntries()
       .then((response) => {
                console.log(response.items)
                const filteredRooms = response.items.filter((item) => item.fields.featured === true)
                const featuredRooms = filteredRooms.map(item => item.fields)
                // console.log(`${JSON.stringify(featuredRooms)}`)
                dispatch(featuredRoomsSuccess(featuredRooms))
       })
       .catch((err)=>{
           console.log(err)  
       })
    }
}