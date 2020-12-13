angular
    .module('app.customer', [])
    .component('customerComponent', {
        templateUrl: 'customer/customer.html',
        controller: CustomerController,
        controllerAs: 'ctrl'
    });

function CustomerController(customerService) {
    const self = this;
    self.users = users;
    self.$onInit = () => {
        self.customers = users();
    }

    function users() {
        return customerService.users();
    }
}