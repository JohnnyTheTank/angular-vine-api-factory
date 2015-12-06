var app = angular.module("app", ['jtt_vine']);
app.controller('controller', ['$scope', 'vineFactory', function($scope, vineFactory) {


    vineFactory.getVideosFromTag({
        tag:"fcbayern",
    }).success(function(_data){
        console.info("videos from tag", _data);
    });


}]);
