﻿var angularFormsApp = angular.module('angularFormsApp', ['ngRoute', 'ui.bootstrap']);

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
        .when("/newUserProfileForm", {
            templateUrl: "app/UserProfileForm/upTemplate.html",
            controller: "upController"
        })
    .otherwise({
        redirectTo: "/home"
    });
});


angularFormsApp.controller("HomeController",
    function ($scope, $location, WarningType) {
        $scope.goToAddNewMessage = function (value) {
            $location.path('/newMessageForm');
            WarningType.addWarning(value);
        };
        $scope.goToMessagesReport = function () {
            $location.path('/newReportsForm');
        };
        $scope.goToUserProfile = function () {
            $location.path('/newUserProfileForm');
        };
        $scope.goToHome = function () {
            $location.path('/home');
        }
    });

angularFormsApp.service('WarningType', function () {
    var warning = '';

    var addWarning = function (name) {
        warning = name;
    }

    var getWarning = function () {
        return warning;
    }

    return {
        addWarning: addWarning,
        getWarning: getWarning
    }
}
);