(function(){

    'use strict';

    var service = { name: 'config' };

    controller.$inject = [];

    function controller(){

        return {
            url: 'http://malina.soft2bet.com'
        };

    }

    app.factory( service.name, controller );

})();