# mf-route-routing
NSS Modern Frameworks Basics Exercise 3.


Route Routing

Setup

mkdir -p ~/workspace/exercises/modern-framework/route-routing && cd $_
Requirements

For this exercise, you're going to create a basic application, with a two views. Each view will provide information about a famous American highway. Each will have a title show the name of the highway, and an element in which the description of the highway will be displayed.

You will need:

An Angular application module. Inject ngRoute into your applcation.
A config section for your application where you set up two routes.
Famous highway #1
Famous highway #2
Two controllers defined in your application.
Two partials - one bound to one of the controllers.
Each controller will have two scope variables.
$scope.highwayName
$scope.highwayDescription
You provide the name and description for each highway that you find via research.
Start http-server and access both of the routes and verify that each highway's information displays correctly.

Example routes:

http://localhost:8080/#/blueridgeparkway

http://localhost:8080/#/route66
