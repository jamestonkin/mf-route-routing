'use strict';

app.controller("TamiamiCtrl", function($scope, $location, $routeParams) {

  $scope.highwayName = "Tamiami Trail";
  $scope.highwayDescription = "The Tamiami Trail is the southernmost 275 miles (443 km) of U.S. Highway 41 (US 41) from Florida State Road 60 (SR 60) in Tampa to US 1 in Miami. A portion of the road also has the hidden designation of State Road 90 (SR 90). The 275-mile (443 km) north–south section (hidden SR 45) extends to Naples, whereupon it becomes an east–west road (hidden SR 90) crossing the Everglades (and forming part of the northern border of Everglades National Park). It becomes Southwest Eighth Street in Miami-Dade County, famous as Calle Ocho in the Little Havana section of Miami, before ending east of Miami Avenue at Brickell Avenue in Brickell, Downtown Miami."

  $scope.tamiamiTrl = function() {
    console.log("you clicked Tamiami Trail button");
    $location.url("/tamiamitrail");
  };

});
