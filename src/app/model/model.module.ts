import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { ProductRepository } from "./product.repository";
import { RestDataSource } from "./rest.datasource";


@NgModule({
imports:[HttpClientModule],    
providers: [ProductRepository, 
    RestDataSource,AuthService
]
})
export class ModelModule { }