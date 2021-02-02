import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {UpgradeModule} from "@angular/upgrade/static";
import {AppComponent} from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    declarations: [
        AppComponent
    ],
    providers: []
})
export class AppModule {
    // Empty placeholder method to satisfy the `Compiler`.
    ngDoBootstrap() {}
}