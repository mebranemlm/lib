angular.module('blogtoc', [])
.controller('btcontroller', ['$scope', function($scope){
  loadtoc(json){
    $scope.posts=json.feed.entry;
  }
}])