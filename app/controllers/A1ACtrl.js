'use strict';

app.controller("A1ACtrl", function($scope, $location, $routeParams) {

  $scope.highwayName = "Florida Route A1A";
  $scope.highwayDescription = "State Road A1A (SR A1A) is a north-south Florida State Road that runs along the Atlantic Ocean, from Key West at the southern tip of Florida, to Fernandina Beach, just south of Georgia on Amelia Island. It is the main road through most oceanfront towns. Part of SR A1A is designated the A1A Scenic and Historic Coastal Byway, a National Scenic Byway.[2] A portion of A1A that passes through Volusia County is designated the Ormond Scenic Loop and Trail, a Florida Scenic Highway. It is also called the Indian River Lagoon Scenic Highway from State Road 510 at Wabasso Beach to U.S. Route 1 in Cocoa. A1A is famous worldwide as the center of beach culture in the United States, a scenic coastal route through most Atlantic coastal cities and beach towns, including the unique tropical coral islands of the Florida Keys. A1A also serves as a major thoroughfare through Miami Beach and other south Florida coastal cities.";

  $scope.a1aHwy = function() {
    console.log("you clicked A1A Highway button");
    $location.url("/fsra1a");
  };

});
