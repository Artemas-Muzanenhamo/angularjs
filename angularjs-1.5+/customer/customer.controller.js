angular
    .module('app.customer', [])
    .component('customerComponent', {
        templateUrl: 'customer/customer.html',
        controller: CustomerController
    });

function CustomerController($scope, customerService) {
    const self = this;
    self.users = users;

    function users() {
        return customerService.users();
    }

    $scope.customers = users();
}