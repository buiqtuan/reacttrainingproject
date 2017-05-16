function combineReducer(currentState,action) {
    var DEFAULT_STATE = { 
        count : { result : 0, loading : false },
        sum : 0, 
        images : { data : [] , loading : false}
    };
    var nextState = Object.assign({}, currentState);

    nextState = {
        count: counter(nextState.count, action),
        sum: sum(nextState.sum,action),
        images : getAsyncRandomImage(nextState.images,action)
    }

    return nextState;
}