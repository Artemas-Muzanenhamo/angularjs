angular
    .module('demoApp', [])
    .controller('SimpleController', function($scope){
        $scope.customers = [
            {name: 'Artemas M', city: 'London'},
            {name: 'Steve Jobs', city: 'Washington'},
            {name: 'Robert M', city: 'Zimbabwe'}
        ];
    });