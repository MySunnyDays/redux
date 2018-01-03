import {createStore} from 'redux';
import React, {Component} from 'react';
import ReactDom from 'react-dom';

let gid = 0;
const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: ++gid,
                text: action.text,
                completed: false,
            }]
        case 'TOGGLE_TOOD': 
           return state.map((todo) => {//map返回一个
                if(todo.id == action.id){
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo;
            })
        default :
            return state;
    }
}

let store = createStore(todos);
console.log("current", store.getState());
console.log('dispach ADD_TODO');
store.dispatch({
    type: 'ADD_TODO',
    text: 'mango'
})
console.log('current:', store.getState());
console.log('dispach TOGGLE_TOOD');

store.dispatch({
    type: 'TOGGLE_TOOD',
    id: 1
})