(function(module){


    module.controller("MainController", function($scope, $http, killzone){
        var main = this;

        var onSearch = function(data){

            $scope.player = data;

        };

        var onClan = function(data){

            $scope.player.clan = data;

        };

        $scope.getdisplayName = function(name){

            killzone.getPlayer(name).then(onSearch);
            killzone.getClan(name).then(onClan);
        };


    });
}(angular.module("killzoneApp")));
