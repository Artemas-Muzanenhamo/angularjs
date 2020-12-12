angular
    .module('app.customer', [])
    .controller('CustomerController', CustomerController);

function CustomerController($scope, customerService) {
    const self = this;
    self.users = users;

    function users() {
        return customerService.users();
    }

    $scope.customers = users();
}