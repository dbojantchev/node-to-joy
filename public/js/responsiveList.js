angular.module('responsiveList', [])
    .controller('responsiveListController', ['$scope', '$http',

        function ($scope, $http) {
            $scope.deviceList = [];

            $scope.textSearch = '';

            $scope.loadData = function total() {
                //$http({method: 'GET', url: './data/DeviceData.json'}).
               $http({method: 'GET', url: '/api/getDeviceData?cachebuster=' + (new Date).getTime()  }).
                   success(function(data, status, headers, config) {
                        $scope.deviceList = data;
                        console.log('$scope.loadData success');
                   }).
                   error(function(data, status, headers, config) {
                        console.log('Sorry, the device list could not be loaded');
                   });
            };

            $scope.loadData();
        }]
    );
