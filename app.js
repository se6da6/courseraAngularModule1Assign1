(function() {
    'use strict';
  
    var myApp = angular.module('myApp', []);
  
    
    function LunchCheckController($scope) {
      $scope.lunchItems = "";
      $scope.message = "";
  
      $scope.checkLunch = function() {
        var items = $scope.lunchItems.split(",");
        var itemCount = countNonEmptyItems(items);
        $scope.message = getMessage(itemCount);
      };
  
      function countNonEmptyItems(items) {
        var count = 0;
        for (var i = 0; i < items.length; i++) {
          if (items[i].trim() !== "") {
            count++;
          }
        }
        return count;
      }
  
      function getMessage(itemCount) {
        if (itemCount === 0) {
          return "Please enter data first.";
        } else if (itemCount <= 3) {
          return "Enjoy!";
        } else {
          return "Too much!";
        }
      }
    }
  
    
    LunchCheckController.$inject = ['$scope'];
  
    
    myApp.controller('LunchCheckController', LunchCheckController);
  })();
  