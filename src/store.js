import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


const Reducer=(state={},action)=>{
    return state
}

const store = createStore(Reducer,applyMiddleware(thunk));

export default store;