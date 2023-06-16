import { Injectable } from "@angular/core";

@Injectable()
export class CalculatorService {

    add(a:number,b:number){
        return a+b;
    }
    print(){
        console.log('Hi from print')
    }
}