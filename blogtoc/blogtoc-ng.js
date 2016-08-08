angular.module('blogtoc', [])
.controller('btcontroller', ['$scope', function($scope){
  // window.onload=function(){
      $scope.filtro={};
      $scope.orderProp={};
      $scope.orderDire=true;
      $scope.posts=json.feed.entry;
      //console.log($scope.posts.length);
      
      $scope.filterByTag=function(tag){
        $scope.filtro={ 
          category: {
            term:tag.term
          }
        }
      }

      $scope.showAll=function(){
        $scope.filtro={}
      }

      $scope.ordenarPor=function(orden){
        $scope.orderProp=orden;
        $scope.orderDire=!$scope.orderDire;
      }

    document.getElementById('bp_toc').classList.remove('oculto');

    
}])
.filter('orderObjectBy', function() {
  return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
    filtered.sort(function (a, b) {
      return (a[field] > b[field] ? 1 : -1);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };
});
