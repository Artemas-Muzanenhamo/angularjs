// import 'core-js/fn/reflect';
// import 'core-js/library/shim';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {UpgradeModule} from "@angular/upgrade/static";
import {AppModule} from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.documentElement, ['app']);
    console.log('Hybrid App Bootstraped!');
});