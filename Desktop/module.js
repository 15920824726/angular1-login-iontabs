(function () {
   'use strict';

   angular.module('desktop',[])
       .config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
           $stateProvider
               .state('tabs', {
                   url: "/tabs",
                   abstract: true,
                   templateUrl: "Desktop/desktop.html"
               })
               .state('tabs.home', {
                   url: "/home",
                   views: {
                       'home-tab': {
                           templateUrl: "Desktop/home.html",
                           controller: 'homeCtrl'
                       }
                   }
               })
               .state('tabs.about',{
                   url:'/about',
                   views:{
                       'about-tab':{
                           templateUrl:'Desktop/about.html',
                           controller:'aboutCtrl'
                       }
                   }
               })
       }])
       .controller('homeCtrl',['$scope',function ($scope) {
           function Init() {
                console.log('home');
           }
           Init();
       }])
       .controller('aboutCtrl',['$scope',function ($scope) {
           function Init() {
                console.log('about');
           }
           Init();
       }])
})()