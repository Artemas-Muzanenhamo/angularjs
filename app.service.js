angular
    .module('demoApp.service', [])
    .service('demoAppService', DemoAppService);

function DemoAppService() {
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