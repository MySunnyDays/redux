// import {createStore} from 'redux';
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

const createStore = (reducer) => {
    let state;
    let list = [];
    const getState = () => {
        return state;
    }
    const dispatch = (action) => {
        state = reducer(state, action);
        list.forEach((fn) => {
            fn();
        })//执行list中的所有回掉函数。
    }
    const subscribe = (fn) =>  {
        list.push(fn);
        return () => {
            list = list.filter((cb) => {
                return cb != fn;
                if( cd == fn){
                    return false;
                }
                return true;
            })
        }
    }
    return {
        getState,
        subscribe,
        dispatch
    }
}




const store = createStore(counter);

store.dispatch({
    type:'INIT',
})//系统会首先执行初始化action。



const render = () => {
    document.getElementsByTagName('body')[0].innerHTML = '<h1>'+store.getState()+'</h1>';
}

const unsubscribe = store.subscribe(render);//监听事件，一旦state发生改变，就会自动执行函数

render();

document.addEventListener('click', () => {
    store.dispatch({
        type: 'increase',
    })
    unsubscribe();
})


