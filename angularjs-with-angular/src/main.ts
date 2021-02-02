import 'core-js/features/reflect';
// import 'core-js/library/shim';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    console.log('Hybrid App Bootstraped!');
});