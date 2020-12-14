interface ICustomerComponent {
    customers: ICustomer[]
}

class CustomerController implements ICustomerComponent {
    customers: ICustomer[];

    constructor(private customerService: ICustomerService) {
        this.customers = this.customerService.users();
    }
}

angular
    .module('app.customer', [])
    .component('customerComponent', {
        templateUrl: 'customer/customer.html',
        controller: CustomerController,
        controllerAs: 'ctrl'
    });