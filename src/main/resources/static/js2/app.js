

var bookStoreApp=angular.module('BookStoreApp', [
    'BookStoreApp.controllers',
    'BookStoreApp.services',
    'BookStoreApp.directives',
    'ngRoute'
]);

// configure our routes
bookStoreApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/index', {
            templateUrl : 'index.html',
            controller  : 'BookStoreController'
        })

        // route for the edit page
        .when('/edit', {
            templateUrl : 'pages/create.html',
            controller  : 'editBookController'
        })

        // route for the create page
        .when('/create', {
            templateUrl : 'pages/create.html',
            controller  : 'addBookController'
        });
});


