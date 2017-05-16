function getAsyncRandomImage(currentState, action) {
    var DEFAULT_STATE = { data : [], loading : false };
    var nextState = Object.assign({},currentState);

    if (currentState === undefined) {
        nextState = DEFAULT_STATE;
        return nextState;
    }

    switch (action.type) {
        case 'IMAGES_LOADING' :
            nextState.loading = true;
            return nextState;
        case 'IMAGES_LOADED' :
            nextState.data = action.data;
            nextState.loading = false;
            return nextState;
        default :
            return nextState;
    }
}