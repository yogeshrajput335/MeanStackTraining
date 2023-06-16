import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'extPipe'
})
export class CustomPipe2Pipe implements PipeTransform{
    transform(n:number,s:string) :string {
        return (n*5)+s
    }

}