interface ICustomerService {
    users(): ICustomer[];
}

class CustomerService implements ICustomerService {
    users(): ICustomer[] {
        return [
            {name: 'Artemas M', city: 'London'},
            {name: 'Steve Jobs', city: 'Washington'},
            {name: 'Robert M', city: 'Zimbabwe'}
        ];
    }
}

angular
    .module('app.customer.service', [])
    .service('customerService', CustomerService);