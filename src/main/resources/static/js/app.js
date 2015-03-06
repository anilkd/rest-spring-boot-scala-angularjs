var bookStoreApp = angular.module('BookStoreApp', [
    'BookStoreApp.controllers',
    'BookStoreApp.services',
    'ui.router'
]);

bookStoreApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('books', {
            url: '/',
            templateUrl: 'pages/list.html',
            controller: 'BookStoreController'
        })
        .state('books.edit', {
            url: '/edit/:bookId',
            templateUrl: 'pages/edit.html',
            controller: 'editBookController'
        })
        .state('books.add', {
            url: '/add',
            templateUrl: 'pages/create.html',
            controller: 'addBookController'
        })

}]);

