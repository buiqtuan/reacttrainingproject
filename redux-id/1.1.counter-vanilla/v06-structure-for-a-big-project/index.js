var store = Redux.createStore(combineReducer);
var valueEl = document.getElementById('value');
var valueSum = document.getElementById('sumDisplay');
function render() {
    //valueEl.innerHTML = 0;
    valueEl.innerHTML = store.getState().count;
    valueSum.innerHTML = store.getState().sum;
}
store.subscribe(render);