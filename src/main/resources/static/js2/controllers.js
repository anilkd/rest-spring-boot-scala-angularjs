angular.module('BookStoreApp.controllers', []).
    controller('BookStoreController', function ($scope, $rootScope, $location,BookStoreAPIService) {
        BookStoreAPIService.query(function (data) {
            $rootScope.bookList = data

        })

        $scope.editBook = function (book) {
           // console.log(book)
            $rootScope.currentEditBook=angular.copy(book)
            console.log( $rootScope.currentEditBook)
            $location.path('edit')
        }


    })
    .controller('addBookController', function ($window,$scope,$route,  $location,BookStoreAPIService) {

        $scope.addBook = function (book) {
            console.log(book)
            BookStoreAPIService.save(book)
            $location.path('/')
            $window.location.reload()
        }
       

    })

    .controller('editBookController', function ($window,$scope,$route,$rootScope, $location, BookStoreAPIService) {
        //$scope.book=$rootScope.currentEditBook;
        //console.log( $rootScope.currentEditBook)
        $scope.updateBook = function (book) {
            console.log(book)
            BookStoreAPIService.save(book)
            $location.path('/')
            $window.location.reload()
        }


       
    })
;