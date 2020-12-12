angular
    .module('app.customer', [])
    .controller('customerController', CustomerController);

function CustomerController($scope, customerService) {
    const self = this;
    self.users = users;

    function users() {
        return customerService.users();
    }

    $scope.customers = users();
}