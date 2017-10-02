angular.module('contacts',[])
.config(function ($stateProvider) {
    $stateProvider
        .state('contacts', {
            url: '/contacts',
            cache: false,
            templateUrl: 'Contacts/contact.html',
            controller: 'contactCtrl'
        });
})