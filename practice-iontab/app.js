angular.module('ionicApp', ['ionic'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: "/home",
                views: {
                    'home-tab': {
                        templateUrl: "home.html",
                        controller: 'HomeTabCtrl'
                    }
                }
            })
            .state('facts', {
                url: "/facts",
                views: {
                    'home-tab': {
                        templateUrl: "facts.html"
                    }
                }
            })
            .state('facts2', {
                url: "/facts2",
                views: {
                    'home-tab': {
                        templateUrl: "facts2.html"
                    }
                }
            })
            .state('about', {
                url: "/about",
                views: {
                    'about-tab': {
                        templateUrl: "about.html"
                    }
                }
            })
            .state('navstack', {
                url: "/navstack",
                views: {
                    'about-tab': {
                        templateUrl: "nav-stack.html"
                    }
                }
            })
            .state('contact', {
                url: "/contact",
                views: {
                    'contact-tab': {
                        templateUrl: "contact.html"
                    }
                }
            });


        $urlRouterProvider.otherwise("/home");

    })

    .controller('HomeTabCtrl', function($scope) {
        console.log('HomeTabCtrl');
    });