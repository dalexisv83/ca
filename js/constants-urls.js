(function(angular) {
    'use strict';
    angular.module('constants.urls', [])
        .constant('URLS', {
            API_DEV: 'https://wiwauk4coldda09.itservices.sbc.com/toolupdater/',
            API_STAGE: 'https://intra3.stage.att.com/toolupdater/',
            API_INTRA: 'https://intra3.web.att.com/toolupdater/',
            API_EXTRA: 'https://www.e-access.att.com/intra3/toolupdater/'
        })
        // .service('pathFinder', ['URLS', '$location', '$http',
        //     function (URLS, $location, $http) {
        //         this.getApiNet = function() {
        //             var location = $location.host(),
        //                 network = function(network) {
        //                     var basePath;
        //                     switch (network) {
        //                         case 'intra':
        //                             basePath = URLS.API_INTRA;
        //                             break;

        //                         case 'stage':
        //                             basePath = URLS.API_STAGE;
        //                             break;

        //                         case 'extra':
        //                             basePath = URLS.API_EXTRA;
        //                             break;

        //                         case 'test':
        //                             basePath = URLS.API_DEV;
        //                             break;
        //                     }
        //                     return basePath;
        //                 };
        //             if (location == 'vwecda05.testla.testfrd.directv.com' || location == 'localhost') {
        //                 return $http.jsonp('https://intra3.web.att.com/toolupdater/Web/api/values/1?callback=JSON_CALLBACK').then(function successTest(response){
        //                     return network('test');
        //                 });
        //             } else if (location == 'zlp09097.vci.att.com') {
        //                 return $http.jsonp('https://intra3.web.att.com/toolupdater/Web/api/values/1?callback=JSON_CALLBACK').then(function successTest(response){
        //                     return network('stage');
        //                 });
        //             } else {
        //                 return $http.jsonp('https://intra3.web.att.com/toolupdater/Web/api/values/1?callback=JSON_CALLBACK').then(function successTest(response) {
        //                     return network('intra');
        //                 }, function errorTest(response) {
        //                     return network('extra');
        //                 });
        //             }
        //         }
        //     }
        // ]);
}(window.angular));