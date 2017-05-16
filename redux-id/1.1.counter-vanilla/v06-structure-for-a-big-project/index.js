var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger,crashReporter,thunk));
var valueEl = document.getElementById('value');
var valueSum = document.getElementById('sumDisplay');
var displayingImagesBox = document.getElementById('imageContainer');
var imagesArray = [];
function render() {
    //valueEl.innerHTML = 0;
    valueEl.innerHTML = store.getState().count.result;
    valueSum.innerHTML = store.getState().sum;
    if (store.getState().count.loading) {
        document.getElementById("loadingStatus").innerHTML = "Loading";
    } else {
        document.getElementById("loadingStatus").innerHTML = "Loaded";
    }
    imagesArray = store.getState().images.data === undefined ? [] : store.getState().images.data;
    if (store.getState().images.loading) {
        document.getElementById("loadingImgStatus").innerHTML = "Loading";
    } else {
        document.getElementById("loadingImgStatus").innerHTML = "Loaded";
    }
    if (imagesArray.length > 0) {
        imagesArray.forEach((element) => {
            displayingImagesBox.innerHTML = displayingImagesBox.innerHTML + '<img src="' + element["link"] + '">';
        });
    }
}
store.subscribe(render);