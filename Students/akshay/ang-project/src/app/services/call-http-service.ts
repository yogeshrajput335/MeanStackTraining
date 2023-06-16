import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class CallHttpService{
    constructor(private http: HttpClient){}
    httpGetRequest(){
        return this.http.get('https://api.publicapis.org/entries')
    }
}