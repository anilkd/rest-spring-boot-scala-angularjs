angular.module('BookStoreApp.controllers', []).
    controller('BookStoreController', function ($state, $stateParams, $scope, BookStoreAPIService) {
        BookStoreAPIService.query(function (data) {
            $scope.bookList = data

        })

        $scope.deleteBook = function (book) {
            BookStoreAPIService.remove({bookId: book.bookId})
            $state.transitionTo('books', $stateParams, {
                reload: true,
                inherit: false,
                notify: true
            });
        }
    })
    .controller('addBookController', function ($state, $stateParams, $scope, BookStoreAPIService) {

        $scope.addBook = function (book) {
            BookStoreAPIService.save(book)
            $state.transitionTo('books', $stateParams, {
                reload: true,
                inherit: false,
                notify: true
            });
        }
    })

    .controller('editBookController', function ($scope, $state, $stateParams, BookStoreAPIService) {

        console.log($stateParams.bookId);
        $scope.currentEditBook = BookStoreAPIService.get({bookId: $stateParams.bookId});
        console.log($scope.currentEditBook)
        $scope.updateBook = function (book) {
            console.log(book)
            BookStoreAPIService.updateBook(book)
            $state.transitionTo('books', $stateParams, {
                reload: true,
                inherit: false,
                notify: true
            });
        }


    })
;