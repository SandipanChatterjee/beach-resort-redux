import * as actionTypes from "../actions/actionsType";
const INITIAL_STATE ={
    rooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
}

const reducer = (state=INITIAL_STATE,action) => {
    // console.log(`rooms reducer : ${JSON.stringify(action.featuredRooms)}`)
    // console.log(action)
    switch(action.type){
        case actionTypes.Add_Featured_Rooms_Success:{
            return{
                ...state,
                featuredRooms : JSON.parse(JSON.stringify(action.featuredRooms)),
                // rooms : JSON.parse(JSON.stringify(action.rooms))
            }  
        }
        case actionTypes.ADD_ROOMS_SUCCESS:{
            return{
                ...state,
                rooms : JSON.parse(JSON.stringify(action.rooms))
            }
        }
        default:{
            return state
        }
    }
}
export default reducer