(function(){

    'use strict';

    app.directive( "passwordVerify", function(  ){
        return {
            require: "ngModel",
            link: function( scope, element, attrs, ctrl ){

                console.log( 'passwordVerify' );

                ctrl.$parsers.unshift( function( viewValue ){
                    var origin = scope.$eval( attrs["passwordVerify"] );
                    if( origin !== viewValue ){
                        ctrl.$setValidity( "passwordVerify", false );
                        return undefined;
                    }else{
                        ctrl.$setValidity( "passwordVerify", true );
                        return viewValue;
                    }
                });

            }
        };
    });


})();
