import { Injectable } from "@angular/core";

export class WithoutInjectableService {

    add(a:number,b:number){
        return a+b; 
    }
    print(){
        console.log('Hi from print')
    }
}