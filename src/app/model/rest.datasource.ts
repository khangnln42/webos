import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Product } from "./product.model";
// import { Order } from "./order.model";
// 
const PROTOCOL = "http";
const PORT = 3500;
@Injectable(    
)
export class RestDataSource {
    baseUrl: string;
    auth_token?: string;
    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
        console.log(this.baseUrl);
    }
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl + "products");
    }
    // saveOrder(order: Order): Observable<Order> {
        // return this.http.post<Order>(this.baseUrl + "orders", order);
    // }
    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + "login", {
        name: user, password: pass
        }).pipe(map(response => {
        this.auth_token = response.success ? response.token : null;
        return response.success;
        }));
    }
    saveProducts(product: Product): Observable<Product>{
        return this.http.post<Product>(this.baseUrl+"product",product, this.getOptions());
    }
    updateProducts(product: Product): Observable<Product>{
        return this.http.put<Product>(`${this.baseUrl}products/${product.id}`,product, this.getOptions());
    }
    deleteProducts(id: number): Observable<Product>{
        return this.http.delete<Product>(`${this.baseUrl}products/${id}`, this.getOptions());
    }
    // getOrders(): Observable<Order[]>{
        // return this.http.get<Order[]>(this.baseUrl + "orders", this.getOptions());
    // } 
    // updateOrders(order: Order): Observable<Order>{
        // return this.http.put<Order>(`${this.baseUrl}orders/${order.id}`,order, this.getOptions());
    // }
    // deleteOrders(id: number): Observable<Order>{
        // return this.http.delete<Order>(`${this.baseUrl}orders/${id}`, this.getOptions());
    // }


    getOptions(){
        return {
            headers : new HttpHeaders({
                "Authorization" :`Bearer<${this.auth_token}>`
            })
        }
    }
}