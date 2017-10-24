// (function(){
//
//     'use strict';
//
//     var component = { name: 'registrationForm'};
//
//     controller.$inject = [ '$scope', 'system' ];
//
//     function controller( $scope, _system ){
//
//         $scope.coutries = [];
//         $scope.page = 1;
//
//
//         _system.countries().then(
//             function( answer ){
//                 console.log( answer );
//                 $scope.countries = answer;
//             },
//             function( answer ){
//                 console.log( answer );
//             }
//         );
//
//
//
//
//     }
//
//     app.component( component.name, {
//         controller: controller,
//         templateUrl: app.getTU( component.name )
//     } );
//
// })();





(function(){

    'use strict';

    var component = { name: 'registrationForm'};

    controller.$inject = ['$scope'];

    function controller( $scope ){

        console.log( component.name );

        $scope.user = {};

        $scope.submit = function( form ){

            if( form.$valid ){


                var formReg = document.getElementById('formReg');

                window.redirect =  true;

                var ajaxMethod = window.sConfig.domain + '/'+ window.sConfig.project +'/api/v1/user/register',
                    link = 'https://' + window.sConfig.apiURL + '/' + window.sConfig.lang,
                    data = {},
                    lang = 'en';

                console.log(window.sConfig.apiURL, ajaxMethod);

                if( window.sConfig.URLOfferParams.btag )
                    data.btag = window.sConfig.URLOfferParams.btag;

                if( window.sConfig.URLOfferParams.clickid )
                    data.clickid = window.sConfig.URLOfferParams.clickid;

                $.ajax({
                    type: 'POST',
                    url: ajaxMethod,
                    contentType: "application/json",
                    data: JSON.stringify( $scope.user

                        // login: formReg.login.value,
                        // email: formReg.email.value,
                        // password: formReg.password.value,
                        // retype: formReg.repeatPassword.value,
                        // promocode: formReg.promocode.value,
                        // accept: formReg.termsCond.value,
                        // name: formReg.name.value,
                        // surname: formReg.surname.value,
                        // birthday: formReg.birthday.value,
                        // gender: formReg.gender.value,
                        // country: select_country.options[select_country.selectedIndex].value,
                        // currency: select_currency.options[select_currency.selectedIndex].value,
                        // city: formReg.city.value,
                        // address: formReg.address.value,
                        // zipcode: formReg.postcode.value,
                        // phone: formReg.phone.value

                    ),
                    dataType: 'json',

                    success: function( answer ){

                        var o = answer.result;
                        var token = btoa( o.prefix + o.login.toUpperCase() + ':' + o.session_id );
                        var url =  link + '?token=' + token;

                        if( data.btag )
                            url +=  '&btag=' + data.btag ;

                        if( data.clickid )
                            url +=  '&clickid=' + data.clickid;

                        if(redirect)
                            window.location = url;

                        console.log( url, answer );
                    },

                    error: function( answer ) {

                        alert('Ошибка ' + answer.responseJSON.errors[0].code + ': ' + answer.responseJSON.errors[0].message);
                    }
                });



                alert( 'submited' );

            } else {

                angular.forEach( form.$error, function( type ){
                    angular.forEach( type, function( field ){
                        field.$setTouched();
                    });
                });
            }

        };

    }

    app.component( component.name, {
        controller: controller,
        templateUrl: app.getTU( component.name )
    } );

})();
