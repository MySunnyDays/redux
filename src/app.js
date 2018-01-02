import {createStore} from 'redux';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
const counter = (state=0, action) => {
    switch(action.type){
        case 'increase':
            return state+1;
        case 'decrease':
            return state-1;
        default :
            return state;
    }
}




const store = createStore(counter);

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>{store.getState()}</h1>
                <button onClick={()=>{
                    store.dispatch({
                        type: 'decrease'
                    })
                }}>-</button>
                <button onClick={()=>{
                    store.dispatch({
                        type: 'increase'
                    })
                }}>+</button>                
            </div>
        )
    }
}

const render = () => {
    ReactDom.render(
        <Counter  />,
        document.getElementById('root')
    )
    // document.getElementsByTagName('body')[0].innerHTML = '<h1>'+store.getState()+'</h1>';
}

render();

const unsubscribe = store.subscribe(render);//监听事件，一旦state发生改变，就会自动执行函数


