angular
    .module('app.customer.service', [])
    .service('customerService', CustomerService);

function CustomerService() {
    const self = this;
    self.users = users;

    function users() {
        return [
            {name: 'Artemas M', city: 'London'},
            {name: 'Steve Jobs', city: 'Washington'},
            {name: 'Robert M', city: 'Zimbabwe'}
        ];
    }
}