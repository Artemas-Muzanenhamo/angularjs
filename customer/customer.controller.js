angular
    .module('app.customer', [])
    .controller('CustomerController', function($scope, customerService){
        const self = this;
        self.users = users;

        function users() {
            return customerService.users();
        }

        $scope.customers = users();
    });