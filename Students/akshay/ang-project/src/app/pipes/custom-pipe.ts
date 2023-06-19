import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'customPipe1'
})
export class customPipe1 implements PipeTransform{
    transform(n: number): string {
        return (n*1000).toFixed(2)+'kg';
        
    }
}
