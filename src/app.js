import {createStore} from 'redux';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import rootReducer from './reducers';

let gid = 0;

let store = createStore(rootReducer);
console.log(store.getState());
class App extends Component {
    render() {
        const state = store.getState();
        const todos = state.todos;
        return(
            <div>
                <input type="text" ref="_input"/>
                <button 
                    onClick={() => {
                        store.dispatch({
                                type: 'ADD_TODO',
                                text: this.refs._input.value
                            })
                        }}>
                        Add
                        </button>
                        <ul>
                        {todos.map((todo) =>{
                            return (
                                <li 
                                style = {{
                                    textDecoration: todo.completed? 'line-through':'none'
                                }}
                                key = {todo.id}
                                onClick = {() =>{
                                    store.dispatch({
                                        type:'TOGGLE_TOOD',
                                        id: todo.id
                                    })
                                }}> 
                            {todo.text}
                            </li>
                        )
                    })}
                </ul>
                <span href="#">Show all </span>
                <a href="#">Show completed </a>
                <a href="#">Show active </a>                                         
            </div>
        )
    }
}

const render = () => {
    ReactDom.render(
        <App />,
        document.getElementById('root')
    )
} 
render();
store.subscribe(render);