angular.module('blogtoc', [])
.controller('btcontroller', ['$scope','orderObjectBy', function($scope,orderObjectBy){
  // window.onload=function(){
      $scope.filtro={};
      $scope.orderProp='title';
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
        $scope.strDire= $scope.orderDire ? 'descendente': 'ascendente';

        if(orden=='title'){
          //angular.filter('filterObjectBy')($scope.posts, '$t', $scope.orderDire);
          var ordenado=orderObjectBy($scope.posts, '$t', $scope.orderDire);
          //console.log(ordenado.length,ordenado);
          $scope.posts=[];
          $scope.posts=ordenado;
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
  var filtered=[];
  var orderObjectBy=function(items, field, reverse){
    // angular.forEach(items, function(item) {
    //   filtered.push(item);
    // });
    filtered=items;
    filtered.sort(function (a, b) {
      return (a.title[field] > b.title[field] ? 1 : -1);
    });
    // filtered.sort(function (a, b) {
    //   return (a.title[field] > b.title[field] ? 1 : -1);
    // });
    //console.log(reverse);
    console.log(filtered[0].title.$t);
    if(reverse) {
     filtered.reverse();
    
    }
    console.log(filtered[0].title.$t);
    return filtered;
  }
  return (orderObjectBy);
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
