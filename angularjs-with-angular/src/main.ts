import 'core-js/features/reflect';
// import 'core-js/library/shim';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";
import {UpgradeModule} from "@angular/upgrade/static";

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.documentElement, ['app']);
    console.log('Hybrid App Bootstraped!');
});