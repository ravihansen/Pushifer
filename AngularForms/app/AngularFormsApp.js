var angularFormsApp = angular.module('angularFormsApp', ["ngRoute"]);

angularFormsApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "app/Home.html",
            controller: "HomeController"
        })
        .when("/newMessageForm", {
            templateUrl: "app/MessageForm/mfTemplate.html",
            controller: "mfController"
        })
        .when("/newReportsForm", {
            templateUrl: "app/ReportsForm/repTemplate.html",
            controller: "repController"
        })
    .otherwise({
        redirectTo: "/home"
    });
});

angularFormsApp.controller("HomeController",
    function ($scope, $location) {
        $scope.goToAddNewMessage = function () {
            $location.path('/newMessageForm');
        };
        $scope.goToMessagesReport = function () {
            $location.path('/newReportsForm');
        };
        $scope.goToHome = function () {
            $location.path('/home');
        }
    });

