angular.module('blogtoc', [])
.controller('btcontroller', ['$scope','orderObjectBy', function($scope,orderObjectBy){
      //Initial values
      $scope.posts=json.feed.entry;
      $scope.filtro={};
      $scope.orderProp='title';
      $scope.orderDire=true;
      
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
        $scope.strDire= $scope.orderDire ? 'descendente': 'ascendente';

        if(orden=='title'){
          $scope.posts=angular.copy(orderObjectBy($scope.posts, '$t', $scope.orderDire));
        }
      }

      $scope.buscar=function(){
        $scope.filtro.category={
            term:angular.copy($scope.busqueda)
        }

        $scope.filtro.title={
          $t:angular.copy($scope.busqueda)
        }

        //console.log($scope.filtro);
      }

    //document.getElementById('bp_toc').classList.remove('oculto');
    angular.element(document.getElementById('bp_toc')).removeClass('oculto');

    
}])
.factory('orderObjectBy', function(){
  
  var fn=function(items, field, reverse){
    var filtered=[];
    filtered=angular.copy(items);
    filtered.sort(function (a, b) {
      return (a.title[field] > b.title[field] ? 1 : -1);
    });
    
    if(reverse) filtered.slice().reverse();
    
    return filtered;
  }
  return (fn);
})
// .filter('orderObjectBy', function() {
//   return function(items, field, reverse) {
//     var filtered = [];
//     angular.forEach(items, function(item) {
//       filtered.push(item);
//     });
//     filtered.sort(function (a, b) {
//       return (a[field] > b[field] ? 1 : -1);
//     });
//     if(reverse) filtered.reverse();
//     return filtered;
//   };
// });
