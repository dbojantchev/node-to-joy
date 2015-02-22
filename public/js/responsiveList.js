angular.module('responsiveList', [])
    .factory("$apiService", ['$http',
        function($http){
            return {
                getDeviceList : function(){
                    return $http({method: 'GET', url: '/api/getDeviceData?cachebuster=' + (new Date()).getTime()  });
                },

                getCreditInfo : function(){
                    /* to use the real method when ready */
                    return $http({method: 'GET', url: './data/creditInfo.json'});
                    //return $http({method: 'GET', url: 'http://ua-rest.902labs.com/creditInfo'});
                },
                getAllotmentData : function(){
                    /* to use the real method when ready */
                    return $http({method: 'GET', url: './data/allotment.json'});
                    //return $http({method: 'GET', url: 'http://ua-rest.902labs.com/allotment'});
                },
                getBillingAddress : function(){
                    /* to use the real method when ready */
                    return $http({method: 'GET', url: './data/billingAddress.json'});
                    //return $http({method: 'GET', url: 'http://ua-rest.902labs.com/billingAddress'});
                }
            };
        }
    ])
    .controller('responsiveListController', ['$scope', '$http', '$apiService',

        function ($scope, $http, $apiService) {
            $scope.deviceList = [];

            $scope.textSearch = '';

            $scope.loadData = function total() {
                $apiService.getDeviceList().
                    success(function(data, status, headers, config) {
                        $scope.deviceList = data;
                        console.log('$scope.loadData success');
                    }).
                    error(function(data, status, headers, config) {
                        console.log('Sorry, the device list could not be loaded');
                    });
                /*
               $http({method: 'GET', url: '/api/getDeviceData?cachebuster=' + (new Date()).getTime()  }).
                   success(function(data, status, headers, config) {
                        $scope.deviceList = data;
                        console.log('$scope.loadData success');
                   }).
                   error(function(data, status, headers, config) {
                        console.log('Sorry, the device list could not be loaded');
                   });
                   */

            };

            $scope.loadData();
        }]
    );
