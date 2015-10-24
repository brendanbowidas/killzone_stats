(function(){

    var killzoneApp = angular.module('killzoneApp', ['ui.router']);

    killzoneApp.config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('results', {
                url: "/results",
                templateUrl: "results.html",
                controller: "MainController",
                controllerAs: "main"

            });

    });

}());
