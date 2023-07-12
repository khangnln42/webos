import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ContactusComponent } from "../Component/contactus/contactus.component";
import { IntroComponent } from "../Component/intro/intro.component";
import { ProductComponent } from "../Component/product/product.component";
import { ModelModule } from "../model/model.module";
import { FooterComponent } from "../shared/layout/footer/footer.component";
import { HeaderComponent } from "../shared/layout/header/header.component";
import { HomeComponent } from "./home.component";

@NgModule({
    imports:[
        ModelModule,RouterModule,BrowserModule, FormsModule
    ],
    declarations: [
        HomeComponent,HeaderComponent,FooterComponent,IntroComponent,ProductComponent,
        ContactusComponent
    ],
    exports:[
        HomeComponent,HeaderComponent,FooterComponent,IntroComponent,ProductComponent,ContactusComponent
    ]
})    
export class HomeModule { }