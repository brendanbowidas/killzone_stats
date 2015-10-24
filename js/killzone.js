(function () {

    var killzone = function ($http) {

        var getPlayer = function (name) {

            return $http.get("http://killzone4.online.scee.com/api/profile/get-competitive/" + name)
                .then(function (response) {
                    return response.data;
                });
        };

        var getClan = function(name) {
            return $http.get("http://killzone4.online.scee.com/api/clan/get-clan-for-user/" + name)
            .then(function(response){
                return response.data;
            });

        };

        return {
            getPlayer: getPlayer,
            getClan: getClan
        }
    };

    var module = angular.module("killzoneApp");
    module.factory("killzone", killzone);

}());
