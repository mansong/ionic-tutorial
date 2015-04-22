### Controller

The employee list is just a single page in our app. Later we will add more pages to it. Now let's define the routing to clean up 
the code.

***app.js*** is the entry point of our app. First we inject ```ionic``` library, and our own ```controllers``` and ```services```. 

In the config section, we use the popular <a href="https://github.com/angular-ui/ui-router">Angular ui-router</a> to define the routing for our app. 
For detail information, please take a look at their github repository.

In ***controllers.js***, we define controller ```EmployeeIndexCtrl```, and inject ```EmployeeService```. The logic is the same as before. 

### Template 

The corresponding view for the controller is ```employee-index.html```. It replace the ```<ion-nav-view></ion-nav-view>``` in ```index.html```. It is a ```<ion-view>``` directive. 
The ```view-title``` attribute will show at the top header bar of our app.

### Routing

We use ui-router to define states in our app.

A state corresponds to a "place" in the application in terms of the overall UI and navigation. It describes (via the controller / template / view properties) what the UI looks like and does at that place.

We define states in **app.js**