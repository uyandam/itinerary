let app = angular.module('commentsApp', []);

app.controller('commentsCtrl', function ($scope) {


    $scope.comment = function () {
        console.log($scope.commentInput);
    };

})