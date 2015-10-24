(function(){
    var killzoneApp = angular.module("killzoneApp");

    killzoneApp.controller("MainController", function($scope, $http, killzone){
        var main = this;

        var onSearch = function(data){

            $scope.player = data;

        };

        $scope.getdisplayName = function(name){

            $scope.displayName = name;


            killzone.getPlayer($scope.displayName).then(onSearch);

        };




    });
}());
