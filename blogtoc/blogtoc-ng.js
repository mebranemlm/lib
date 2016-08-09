angular.module('blogtoc', [])
.controller('btcontroller', ['$scope', function($scope,orderObjectBy){
      //Initial values
      $scope.posts=json.feed.entry;
      $scope.filtro={};
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
        $scope.strDire= $scope.orderDire ? 'ascendente': 'descendente';
      }

      $scope.buscar=function(){
        $scope.filtro.category={
            term:angular.copy($scope.busqueda)
        }

        $scope.filtro.title={
          $t:angular.copy($scope.busqueda)
        }
      }

    //document.getElementById('bp_toc').classList.remove('oculto');
    angular.element(document.getElementById('bp_toc')).removeClass('oculto');
    $scope.ordenarPor('title.$t');

    
}])