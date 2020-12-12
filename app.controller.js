angular
    .module('demoApp')
    .controller('SimpleController', function($scope, demoAppService){
        const self = this;
        self.users = users;

        function users() {
            return demoAppService.users();
        }

        $scope.customers = users();
    });