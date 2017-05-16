var decrease = function () {
    return {type : 'DECREMENT'};
};

var increase = function() { 
    return {type : 'INCREMENT'};
};

var sumup = function() {
    return {type : 'SUM'};
};

//ASYNC action
var asyncIncrease = (dispatch, state) => {
    fakeServerApi.increaseCount(state.count.result, (data) => {
        dispatch({ type : 'INCREMENT'});
    })
}