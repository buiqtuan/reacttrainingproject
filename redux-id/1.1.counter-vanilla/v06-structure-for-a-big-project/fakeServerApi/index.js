var fakeServerApi = {
    increaseCount : function (currentCount, cb) {
        setTimeout(() => {
            cb(currentCount + 1);
        },2000)
    }
}