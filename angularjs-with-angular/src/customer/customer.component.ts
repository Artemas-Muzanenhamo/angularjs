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
    .module('app.customer', [
        'app.customer.service'
    ])
    .component('customerComponent', {
        templateUrl: './customer.html',
        controller: CustomerController,
        controllerAs: 'ctrl'
    });