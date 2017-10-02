angular.module('contacts')
.controller('contactCtrl',['$scope','$ionicHistory','$state',function ($scope,$ionicHistory,$state) {
    $scope.back=function () {
        $ionicHistory.goBack(-1);
    }
    $scope.slideHasChanged=function (index) {
        alert(index)
    }

    $scope.goDesktop=function () {
        $state.go('tabs.home');
    }

    function Init() {
        $scope.items=[{name:'xiaoming'},{name:'edw'},{name:'lululu'}];
    }

    Init();
}]);