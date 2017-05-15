function counter(currentState, action) {
    var DEFAULT_STATE = 0;
    var nextState = currentState;

    if (currentState === undefined) {
        nextState = DEFAULT_STATE;
        return nextState;
    }
    switch (action.type) {
        case 'DECREMENT' :
            nextState = currentState - 1;
            return nextState;
        case 'INCREMENT' :
            nextState = currentState + 1;
            return nextState;
        default :
            return nextState;
    }
}

function sum(currentState,action) {
    var DEFAULT_STATE = 0;
    var nextState = currentState;

    if (currentState === undefined) {
        nextState = DEFAULT_STATE;
        return nextState;
    }

    if (action.type === 'SUM') {
        var a = parseInt(document.getElementById('varA').value,10);
        var b = parseInt(document.getElementById('varB').value,10);
        nextState = a + b;
        currentState = nextState;
        return nextState;
    }

    return nextState;
}


function combineReducer(currentState,action) {
    var DEFAULT_STATE = { count : 0, sum : 0};
    var nextState = Object.assign({}, currentState);

    nextState = {
        count: counter(nextState.count, action),
        sum: sum(nextState.sum,action)
    }

    return nextState;

    // if (currentState === undefined) {
    //     nextState = DEFAULT_STATE;
    //     return nextState;
    // }

    // switch (action.type) {
    //     case 'DECREMENT':
    //         nextState.count = currentState.count - 1;
    //         return nextState;
    //     case 'INCREMENT':
    //         nextState.count = currentState.count + 1;
    //         return nextState;
    //     case 'SUM':
    //         var a = parseInt(document.getElementById('varA').value,10);
    //         var b = parseInt(document.getElementById('varB').value,10);
    //         nextState.sum = a + b;
    //         return nextState;
    //     default :
    //         return nextState;
    // }
}