import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class BehService{
    private numberObs: BehaviorSubject<number>= new BehaviorSubject(0);
    
    get(){
        return this.numberObs.asObservable();

    }
    set(i:number){
        this.numberObs.next(i);
    }
}