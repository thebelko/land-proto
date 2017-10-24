app.directive("datepicker", function () {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, elem, attrs, ngModelCtrl) {

            var updateModel = function (dateText) {
                scope.$apply(function () {
                    ngModelCtrl.$setViewValue(dateText);
                });
            };

            var options = {

                onClose: function(){
                    elem.removeClass( 'datepicker-open' );
                },

                dateFormat: "yy-mm-dd",

                onSelect: function (dateText) {
                    updateModel(dateText);
                },

                beforeShow:function( textbox, instance ){
                    elem.addClass( 'datepicker-open' );
                    $('.datepicker-body').append($('#ui-datepicker-div'));
                },
                changeMonth: true,
                changeYear: true,
                yearRange: '-100:-18',
                defaultDate: '1920-01-01'



            };
            elem.datepicker(options);
        }
    }
});
