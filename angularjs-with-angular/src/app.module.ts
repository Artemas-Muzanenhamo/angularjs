let angular = require('angular');
let customerComponent = require('./customer/customer.component');
let customerService = require('./customer/customer.service');

angular.module('app', [
    'app.customer',
    'app.customer.service'
]);