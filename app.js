(function () {
  'use strict'

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',function($scope){
    foodcalculate($scope);
      });
  function foodcalculate($scope){
    $scope.name = "gaurav";
    console.log("checkbutton " + $scope.checkbutton);
    console.log("name = " + $scope.name);

    $scope.FoodCalc = function(){
      $scope.result = "";
      var name = $scope.name;
      $scope.foodlist = name.split(',');
      var foodlist = $scope.foodlist;
      var len = 0;
      //calculating length ignoring empty
      foodlist.forEach(function(i){
        console.log("i = " + i);
        if (i !== "")
          len = len + 1;
      });
      console.log("foodlist = " + foodlist);
      console.log("foodlist len = " + len);
      if (foodlist == ""){
        $scope.result = "Please enter data first";
      } else if (len <= 3){
        console.log("Enjoy");
        $scope.result = "Enjoy";
      } else {
        console.log("Too Much");
        $scope.result = "Too Much";
      }
    //console.log("foodlist = " + $scope.foodlist);
  }
}
})();
