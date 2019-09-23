//ARRAY

Array.prototype.random = function () {
  var arr = this;
  arr.forEach(function () {
    arr=arr.sort(function () {
      return .5 - Math.random();
    });
  });
  return arr;
};
