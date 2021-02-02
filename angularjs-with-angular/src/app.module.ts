import {downgradeComponent, downgradeModule} from "@angular/upgrade/static";
import {AppComponent} from "./app/app.component";
import {StaticProvider} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

let angular = require('angular');
let customerComponent = require('./customer/customer.component');
let customerService = require('./customer/customer.service');

const bootstrapFn = (extraProviders: StaticProvider[]) => {
    const platformRef = platformBrowserDynamic(extraProviders);
    return platformRef.bootstrapModule(AppModule);
};

const downgradedModule = downgradeModule(bootstrapFn);

angular.module('app', [
    downgradedModule,
    'app.customer',
    'app.customer.service'
]).directive(
    'myApp',
    downgradeComponent({ component: AppComponent }) as angular.IDirectiveFactory
);