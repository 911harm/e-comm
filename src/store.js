import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const Reducer=(state={
    card:[],
    products:[]
},action)=>{
    switch(action.type){
        case("REQUEST_ITEM_LIST"):
        return {...state,loading:true}
        case("ADD_ITEM_LIST"):
        return {...state,loading:false,products:action.payload}
        case("FAIL_ITEM_LIST"):
        return {...state,loading:false,message:"Error"}
        case("ADD_ITEM_CARD"):
        return {...state,card:[...state.card,action.payload]}
        default:
        return state
    }
}

const store = createStore(Reducer,applyMiddleware(thunk));

export default store;

// export const addItemsList=()=>{
//     return (dispath)=>{
//         fetch()
//     }
// }