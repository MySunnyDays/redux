let gid = 0;
const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: ++gid,
                text: action.text,
                completed: false,
            }]
            //[].concat(state)  es6写法.
            //push('daadsa');
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
export default todos;