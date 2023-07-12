import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HomeFirstGuard } from './homeFirst.guard';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { IntroComponent } from './Component/intro/intro.component';
import { ProductComponent } from './Component/product/product.component';
import { ContactusComponent } from './Component/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
      
  ],
  imports: [HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: "home", component: HomeComponent,
        canActivate: [HomeFirstGuard]
      },
      {
        path: "intro", component: IntroComponent,
        canActivate: [HomeFirstGuard]
      },
      {
        path: "product", component: ProductComponent,
        canActivate: [HomeFirstGuard]
      },
      {
        path: "contactus", component: ContactusComponent,
        canActivate: [HomeFirstGuard]
      },
      // {
        // path: "admin",
        // loadChildren: () => import("./admin/admin.module")
        // .then(m => m.AdminModule),
        // canActivate: [StoreFirstGuard]
      // },
      { path: "**", redirectTo: "/home" }
      ]),
  ],
  providers: [HomeFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
