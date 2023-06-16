import { Injectable } from "@angular/core";

@Injectable()
export class CalculatorService {

    multiply(a:number,b:number){
        return a*b;
    }
    print(){
        console.log('used dependancy injector and result given in console')
    }
}