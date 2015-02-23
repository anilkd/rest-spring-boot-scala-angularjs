angular.module('BookStoreApp.controllers', []).
    controller('BookStoreController', function ($scope, $rootScope, $location,BookStoreAPIService) {
        BookStoreAPIService.query(function (data) {
            $rootScope.bookList = data

        })

        $scope.editBook = function (book) {
            console.log(book)
            $rootScope.currentEditBook=angular.copy(book)
            console.log( $rootScope.currentEditBook)
            $location.path('edit')
        }


    })
    .controller('addBookController', function ($scope,$route,  $location,BookStoreAPIService) {

        $scope.addBook = function () {
            BookStoreAPIService.save($scope.book)
            $location.path('/')
            $route.reload()
        }
       

    })

    .controller('editBookController', function ($scope,$rootScope, $location, BookStoreAPIService) {
        //$scope.book=$rootScope.currentEditBook;
        //console.log( $rootScope.currentEditBook)
        $scope.updateBook = function () {
            console.log($scope.book)
            BookStoreAPIService.save($rootScope.currentEditBook)
            $location.path('/')
            $route.reload()
        }


       
    })
;