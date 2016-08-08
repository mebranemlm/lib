angular.module('blogtoc', [])
.controller('btcontroller', ['$scope', function($scope){
  // window.onload=function(){
    
      $scope.posts=json.feed.entry;
      //console.log($scope.posts.length);
    
  // }
}])