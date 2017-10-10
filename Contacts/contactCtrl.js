angular.module('contacts')
.controller('contactCtrl',['$scope','$ionicHistory','$state',function ($scope,$ionicHistory,$state) {
    $scope.back=function () {
        $ionicHistory.goBack(-1);
    }
    $scope.slideHasChanged=function (index) {
        alert(index)
    }

    $scope.goNav=function () {
        $state.go('map',{data:{
            longitude: 113.9891976,
            latitude: 22.5257467
            }
        });
    }

    function Init() {
        $scope.items=[{name:'xiaoming'},{name:'edw'},{name:'lululu'}];
        var key='AIzaSyATKBhVqIulVmVb_OrYwenAtKUVGwjs3n4';
        var newkey='AIzaSyDtWNX_y9wy5-GI_a6LnVlol92NwwixqO4';
        var key1='AIzaSyBlCKxKo-_nxadxHZbdThsOEUaxzhpk5-4';
        var key2='AIzaSyDndFJX4vIbpWdbU01l4oyvtRFJF5k3eDA';
        $.getScript('http://maps.google.cn/maps/api/js? ='+newkey,function(){
            getLocationByLatitude(13.737006,100.560392);
           // getLocationByLatitude1('22.5257467','113.9891976');
        });
         //getLocationByLatitude1(22.5257467,113.9891976);
        // if(navigator.geolocation){
        //     navigator.geolocation.getCurrentPosition(function(position){
        //
        //     },function(err){
        //
        //     })
        // }

    }

    function getLocationByLatitude1(latitude,longitude) {
        var haight = new google.maps.LatLng(longitude, latitude);
        // var haight = new google.maps.LatLng(37.77, -122.447);
        directionsDisplay = new google.maps.DirectionsRenderer();
        var mapOptions = {
            zoom: 14,
            center: haight
        }
        map = new google.maps.Map(document.getElementById('canvas1'), mapOptions);
         directionsDisplay.setMap(map);
        var marker = new google.maps.Marker({
            position: haight,
            map: map
        });
    }

    function getLocationByLatitude(latitude,longitude){
        var myLatLng = {lat: latitude, lng: longitude};
        var map = new google.maps.Map(document.getElementById('canvas1'), {
            zoom: 15,
            center: myLatLng
        });
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hello World!'
        });
        marker.setMap(map);
    }


    Init();
}]);