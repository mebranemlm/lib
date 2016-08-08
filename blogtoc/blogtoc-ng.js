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

      $scope.orderByTitle=function(){
        $scope.orderProp='title';
        $scope.orderDire=!$scope.orderDire;
      }
    
  // }
}])
// .filter('filterByTag', function() {
//     return function(posts, tag) {
//         return posts.filter(function(post) {
//             var sw=false;
//             post.category.map(function(cate,i){
//                         if(cate.term==tag){
//                           sw=true;
//                         }
//               });
//             return sw;

//         });
//     };
// })