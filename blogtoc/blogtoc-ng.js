angular.module('blogtoc', [])
.controller('btcontroller', ['$scope', function($scope){
  // window.onload=function(){
      $scope.filtro={};
      $scope.posts=json.feed.entry;
      //console.log($scope.posts.length);
      
      $scope.filterByTag=function(tag){
        // var aux={
        //  // scheme:tag.scheme,
        //   term:tag.term
        // }
        $scope.filtro={ 
          category: {
            term:tag.term
          }
        }
       // console.log(aux);
      }

      $scope.showAll=function(){
        $scope.filtro={}
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