angular.module('BookStoreApp.controllers', []).
    controller('BookStoreController', function ($state, $rootScope, $stateParams, $scope, BookStoreAPIService) {
        BookStoreAPIService.query(function (data) {
            $scope.bookList = data

        })
        $rootScope.cancel = function () {

            $rootScope.mainView()
        }

        $rootScope.mainView = function () {
            $state.transitionTo('books', $stateParams, {
                reload: true,
                inherit: false,
                notify: true
            });

        }
        $scope.deleteBook = function (book) {
            BookStoreAPIService.remove({bookId: book.bookId})
            $rootScope.mainView()
        }
    })
    .controller('addBookController', function ($state,$rootScope, $stateParams, $scope, BookStoreAPIService) {

        $scope.addBook = function (book) {
            BookStoreAPIService.save(book)
            $rootScope.mainView()
        }
    })

    .controller('editBookController', function ($scope,$rootScope, $state, $stateParams, BookStoreAPIService) {

        $scope.currentEditBook = BookStoreAPIService.get({bookId: $stateParams.bookId});
        $scope.updateBook = function (book) {
            console.log(book)
            BookStoreAPIService.updateBook(book)
            $rootScope.mainView()
        }


    })
;