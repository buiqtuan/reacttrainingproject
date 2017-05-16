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