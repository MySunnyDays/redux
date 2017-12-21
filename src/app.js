function counter(num, action) {
    switch(action.type){
        case 'increase':
            return num+1;  
        case 'decrease':
            return num-1;
        default :
            return num;
    }
}
alert(1);
console.log(
    counter(0, {
        type: 'increase'
    })
);