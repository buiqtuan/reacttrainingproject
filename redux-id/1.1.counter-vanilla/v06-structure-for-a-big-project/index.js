var store = Redux.createStore(counter);
var valueEl = document.getElementById('value');
var valueSum = document.getElementById('sumDisplay');
function render() {
    //valueEl.innerHTML = 0;
    valueEl.innerHTML = store.getState().count;
    valueSum.innerHTML = store.getState().sum;
}
render();
store.subscribe(render);

function counter(currentState,action) {
var DEFAULT_STATE = { count : 0, sum : 0};
var nextState = Object.assign({}, currentState);
if (currentState === undefined) {
    nextState = DEFAULT_STATE;
    return nextState;
}

switch (action.type) {
    case 'DECREMENT':
        nextState.count = currentState.count - 1;
        return nextState;
    case 'INCREMENT':
        nextState.count = currentState.count + 1;
    case 'SUM':
        var a = parseInt(document.getElementById('varA').value,10);
        var b = parseInt(document.getElementById('varB').value,10);
        nextState.sum = a + b;
    default :
        return nextState;
    }
}