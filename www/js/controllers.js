angular.module('directory.controllers', [])

.controller('EmployeeIndexCtrl',['$scope', 'EmployeeService', function ($scope, EmployeeService) {

  //define a employees variable to hold all employees data
  $scope.employees = [];

  //get all employees from EmployeeService
  var findAllEmployees = function() {
    EmployeeService.findAll().then(function(employees){
      $scope.employees = employees;
    });
  };

  //initially, show all employees on view 
  findAllEmployees();

}])
    
;