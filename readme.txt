Directives - a way to teach HTML new tricks.

	Anytime you see `ng-`, that is an angular directive.
	ng-app - this is an important directive as it will allow the angular.js 
	script to be initialised and used within the HTML.

	ng-model - This is another directive which relised on the activation of
	the `ng-app` directive. Behind the scenes, this is going to put a property
	assigned to it into memory to the scope. In MVC terms, what this does is 
	it's adding a simple view model with a property assigned to it.

Filters - This allows you to amend or tailor your result or result set in your bind 
by using Angular JS filters e.g. uppercase as {{cust.name | uppercase}}.
filters are initialized by adding the pipe `|` char and then entering the desired
filter.

Data Bind - Binding allows you to assign a directive name's value to an expression `{{directive-name-here}}` 
that will then display the value of the directive name


MVC
==========

Views - 

Controller - A controller can exists in a specific <div> or the whole page given the ng-controller 
is initialized with the name of the desired controller you've made.

Scope - Ties the controller to the view. The view and controller do not need to know about each other
but the scope keeps the two tied to each other.

Module
==============

Modules - Modules can have a config functions that can define different Routes. Acts as an object container.
Once the module name is defined then you can go into `ng-app` with the module name.

Routes - Routes has a controller and a view assigned to it. Of course the controller and the view
communicate via the `$scope`

Factories - Can be Services or Resources that the controller will use to get data. Views use Directives in this case.

Creating a Module
===================

var demoApp = angular.module('demoApp',[]);
