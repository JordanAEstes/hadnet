import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
// import { NativeScriptModule } from "nativescript-angular/nativescript.module";
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { FeaturedRoutingModule } from "./featured-routing.module";
import { FeaturedComponent } from "./featured.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FeaturedRoutingModule
        // NativeScriptModule,
        // NativeScriptFormsModule
    ],
    declarations: [
        FeaturedComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FeaturedModule { }
