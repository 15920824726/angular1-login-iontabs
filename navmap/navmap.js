
    /**
     * Created by Administrator on 2017/9/20 0020.
     */

    'use strict';
    angular.module('navmap')
        .controller('mapCtrl',['$scope','$state','$http','$stateParams','$cordovaGeolocation','$timeout',function ($scope,$state,$http,$stateParams,$cordovaGeolocation,$timeout) {
            //
            // navigator.geolocation.getCurrentPosition(function (position) {
            //         var latitude=position.coords.latitude;
            //          var longitude=position.coords.longitude;
            //     $scope.accuracy = position.coords.accuracy;
            //     $scope.dataReceived = true;
            //     //var myPosition = new google.maps.LatLng(position.coords.longitude, position.coords.latitude);
            //     var myPosition={lat: latitude, lng: longitude};
            //
            //     function calculateAndDisplayRoute(directionsService, directionsDisplay) {
            //         directionsService.route({
            //             origin: myPosition,
            //             destination: {
            //                 lat: parseFloat($stateParams.latitude),
            //                 lng: parseFloat($stateParams.longitude)
            //             },
            //             travelMode: google.maps.TravelMode[$scope.mode]
            //         }, function(response, status) {
            //             if (status == 'OK') {
            //                 directionsDisplay.setDirections(response);
            //             } else {
            //                 Loader.toggleLoadingWithMessage($scope.translations.DIRECTION_REQUEST_FAILED);
            //             }
            //         });
            //     }
            //     var directionsDisplay = new google.maps.DirectionsRenderer;
            //     var directionsService = new google.maps.DirectionsService;
            //     $scope.initAMap = function(longitude, latitude) {
            //         //  	var haight = new google.maps.LatLng(longitude, latitude);
            //         var map = new google.maps.Map(document.getElementById('navmap'), {
            //             zoom: 14,
            //             center: myPosition
            //         });
            //         directionsDisplay.setMap(map);
            //
            //         calculateAndDisplayRoute(directionsService, directionsDisplay);
            //     };
            //     $scope.changeMode = function(name) {
            //         $scope.mode = name;
            //         calculateAndDisplayRoute(directionsService, directionsDisplay);
            //     };
            //     $scope.goBack = function() {
            //         $ionicHistory.goBack(-1);
            //     }
            //     $timeout($scope.initAMap(), 5000);
            // },function (err) {
            //     console.log(err);
            // })
            // var posOptions = {
            //     timeout: 7000,
            //     enableHighAccuracy: false
            // };

            $scope.mode = "TRANSIT";
            var posOptions = {enableHighAccuracy: true};
            //$cordovaGeolocation.getCurrentPosition(posOptions).then(function(position) {
                navigator.geolocation.getCurrentPosition(function (position) {
                var latitude=position.coords.latitude;
                var longitude=position.coords.longitude;
                $scope.accuracy = position.coords.accuracy;
                $scope.dataReceived = true;
                //var myPosition = new google.maps.LatLng(position.coords.longitude, position.coords.latitude);
                var myPosition={lat: latitude, lng: longitude};

                function calculateAndDisplayRoute(directionsService, directionsDisplay) {
                    directionsService.route({
                        origin: myPosition,
                        destination: {
                            lat: parseFloat($stateParams.data.latitude),
                            lng: parseFloat($stateParams.data.longitude)
                        },
                        travelMode: google.maps.TravelMode[$scope.mode]
                    }, function(response, status) {
                        if (status == 'OK') {
                            directionsDisplay.setDirections(response);
                        } else {
                            Loader.toggleLoadingWithMessage($scope.translations.DIRECTION_REQUEST_FAILED);
                        }
                    });
                }
                var directionsDisplay = new google.maps.DirectionsRenderer;
                var directionsService = new google.maps.DirectionsService;
                $scope.initAMap = function(longitude, latitude) {
                    //  	var haight = new google.maps.LatLng(longitude, latitude);
                    var map = new google.maps.Map(document.getElementById('navmap'), {
                        zoom: 14,
                        center: myPosition
                    });
                    var marker = new google.maps.Marker({
                        position: myPosition,
                        title:"Hello World!"
                    });
                    directionsDisplay.setMap(map);

                    calculateAndDisplayRoute(directionsService, directionsDisplay);
                };
                $scope.changeMode = function(name) {
                    $scope.mode = name;
                    calculateAndDisplayRoute(directionsService, directionsDisplay);
                };
                $scope.goBack = function() {
                    $ionicHistory.goBack(-1);
                }
                $scope.initAMap();
            });

            $scope.goDesktop=function () {
                $state.go('tab');
            }

            function InitData() {
               console.log($stateParams.data);
            }
            InitData();
        }])

