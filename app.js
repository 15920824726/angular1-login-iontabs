/**
 * Created by Administrator on 2017/9/20 0020.
 */
(function () {
    'ues strict';

    var app= angular.module('App',['ionic','ngCordova','userInfo','contacts','desktop','navmap','pascalprecht.translate']);
    app.config(['$stateProvider', '$urlRouterProvider','$ionicConfigProvider','$translateProvider',
        function ($stateProvider, $urlRouterProvider,$ionicConfigProvider,$translateProvider) {
            //tab position in ios android
            ionic.Platform.isFullScreen = true;
            $ionicConfigProvider.tabs.position('bottom');

            $ionicConfigProvider.platform.ios.tabs.style('standard');
            $ionicConfigProvider.platform.ios.tabs.position('bottom');
            $ionicConfigProvider.platform.android.tabs.style('standard');
            $ionicConfigProvider.platform.android.tabs.position('standard');

            $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
            $ionicConfigProvider.platform.android.navBar.alignTitle('left');

            $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
            $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

            $ionicConfigProvider.platform.ios.views.transition('ios');
            $ionicConfigProvider.platform.android.views.transition('android');



            $urlRouterProvider.otherwise('/login');
        }])
})()



