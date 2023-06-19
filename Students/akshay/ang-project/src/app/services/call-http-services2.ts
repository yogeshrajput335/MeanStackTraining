import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpCallService2{
    constructor(private http: HttpClient){}
    getReq(){
        return this.http.get('https://api.publicapis.org/entries')
    }
}