(function(){

    'use strict';

    var service = { name: 'system' };

    controller.$inject = ['$http', '$q', 'config'];

    function controller( $http, $q, _config ){

        function getCountryList(){

            var defer = $q.defer();
            var params = {
                params: {
                    limit: 1000
                },
                cache: true
            };

            $http.get( _config.url + '/api/v1/geo/countries?limit=1000', params ).then(
                function( answer ){
                    defer.resolve( answer.data );
                },
                function( answer ){
                    defer.reject( answer.data.errors );
                }
            );

            return defer.promise;
        }

        return {
            countries: getCountryList
        };
    }

    app.factory( service.name, controller );




})();