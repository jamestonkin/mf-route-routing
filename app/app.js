'use strict';

var app = angular.module("RouteApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.
  when('/tamiamitrail', {
    templateUrl: "partials/tamiamitrail.html",
    controller: "TamiamiCtrl"
  }).
  when('/fsra1a', {
    templateUrl: "partials/fsra1a.html",
    controller: "A1ACtrl"
  }).
  otherwise('/');
});
