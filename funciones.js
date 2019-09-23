//ARRAY

 Array.prototype.random = function () {
    return this.forEach(function () {
        return this.sort(function () {
            return .5 - Math.random();
        });
    });
};
