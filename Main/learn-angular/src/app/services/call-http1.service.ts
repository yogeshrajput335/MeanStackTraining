import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpCall1Service{

    constructor(private http: HttpClient){}

    getReq(){
        return this.http.get('https://api.publicapis.org/entries')
    }
}