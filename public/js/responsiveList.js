angular.module('responsiveList', [])
    .factory("$apiService", ['$http',
        function($http){
            return {
                getDeviceList : function(){
                    return $http({method: 'GET', url: '/api/getDeviceData?cachebuster=' + (new Date()).getTime()  });
                },
                getClasses : function(){
                    return $http({method: 'GET', url: '/api/getClasses?cachebuster=' + (new Date()).getTime()  });
                },
                getStudents : function(){
                    return $http({method: 'GET', url: '/api/getStudents?cachebuster=' + (new Date()).getTime()  });
                }
            };
        }
    ])
    .controller('responsiveListController', ['$scope', '$http', '$q', '$apiService',

        function ($scope, $http, $q, $apiService) {
            $scope.deviceList = [];

            $scope.textSearch = '';

            $scope.loadDeviceData = function total() {
                $apiService.getDeviceList().
                    success(function(data, status, headers, config) {
                        $scope.deviceList = data;
                        console.log('$scope.loadData success');
                    }).
                    error(function(data, status, headers, config) {
                        console.log('Sorry, the device list could not be loaded');
                    });
            };

            $scope.loadAllData = function () {

                var allDataPromise = $q.all([
                    $apiService.getDeviceList(),
                   // $apiService.getClasses(),
                  //  $apiService.getStudents()
                ]);

                allDataPromise.then(function(dataList) {
                    console.log('allDataPromise done');
                    $scope.deviceList = dataList[0].data;
                });
            };

          /* $scope.loadDeviceData(); */

            $scope.loadAllData();
        }]
    );
