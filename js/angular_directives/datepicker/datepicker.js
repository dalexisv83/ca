/*jslint unparam: true*/
(function(angular) {
    'use strict';
    angular.module('directives.datepicker', [])
        .directive('datepicker', ['$timeout', function($timeout) {
            var linker = function(scope, element, attrs, ngModelCtrl) {
                console.log(attrs.datepicker);
                if ((typeof Modernizr == 'undefined') || (!Modernizr.inputtypes.date)) {
                    attrs.datepicker = attrs.datepicker.replace((/'/g), "\"");
                    attrs.datepicker = "{" + attrs.datepicker + "}";
                    attrs.datepicker = JSON.parse(attrs.datepicker);
                    $(element).datepicker(attrs.datepicker);
                }
            };

            return {
                restrict: 'A',
                require: 'ngModel',
                transclude: true,
                link: linker,
            };
        }])
        .directive('datetimepicker', ['$timeout', function($timeout) {
            var linker = function(scope, element, attrs, ngModelCtrl) {
                if ((typeof Modernizr == 'undefined') || (!Modernizr.inputtypes.date)) {
                    attrs.datetimepicker = attrs.datetimepicker.replace((/'/g), "\"");
                    attrs.datetimepicker = "{" + attrs.datetimepicker + "}";
                    attrs.datetimepicker = JSON.parse(attrs.datetimepicker);
                    $(element).datetimepicker(attrs.datetimepicker);
                }
            };

            return {
                restrict: 'A',
                require: 'ngModel',
                transclude: true,
                link: linker,
            };
        }]);
}(window.angular));
/*jslint unparam: false*/