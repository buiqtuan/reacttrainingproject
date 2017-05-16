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
    dispatch({type : 'INCREMENT_LOADING'});
    fakeServerApi.increaseCount(state.count.result, (data) => {
        dispatch({ type : 'INCREMENT'});
    })
}

//get random images
var getRandomImages = (dispatch, state) => {
    let imgurApi = "https://api.imgur.com/3/gallery/random/random/1";
    dispatch({ type : "IMAGES_LOADING"});
    $.getJSON(imgurApi).done((data) => {
        dispatch({ type : "IMAGES_LOADED" , data : data.data });
    })
}