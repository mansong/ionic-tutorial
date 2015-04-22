### Employees Data

We move the data into a seperate file **services.js**, and creat a new module **directory.services** to fetch data.

Here we use a simple javascript object array to mock the data. In reality you will likely get them from database. 

The ```employees``` variable contains all the data. For each employee entry, there are ```firstName```, ```lastName```, ```title``` and `pic` attributes.

### Promise

To fetch data, we use **$q**. It is a service that helps you run functions asynchronously, and use their return values (or exceptions) when they are done processing.

It is not necessary here as the data is an in-memory array, which is instantly avaiable. In real world, fetching data take some time. 
And promise provides an intuitive and clean interface for dealing with asynchronous code.

### Controller

In **EmployeeIndexCtrl** controller, we can use the `resolve` method to get employees array from promise. `EmployeeService.findAll` return 
a promise, it has a resolve method,

```
resolve(value) – resolves the derived promise with the value

promise.then(function(value) { resolvedValue = value; });

```

The value is the `employees` array. We need to assign it to the `$scope.employees` variable in controller.


