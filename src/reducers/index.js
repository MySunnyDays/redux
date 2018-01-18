import {combineReducers} from 'redux';
import todos from './todos.js';
import visiableFilter from './visiableFilter.js'

export default combineReducers({
    todos,
    visiableFilter
})



                           //combineReducers实现原理
// const combineReducers = (reducers) => {
//     return (state = {}, action) => {
//         let newState = {}
//         Object.keys(reducers).forEach((key) => {
//             console.log(key);            
//             newState[key] =  reducers[key](state[key], action);
//         })
//             return newState;
//     }
// } 

// export default combineReducers({
//     todos:todos,
//     visiableFilter:visiableFilter
// })