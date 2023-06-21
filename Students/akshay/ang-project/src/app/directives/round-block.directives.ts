import { Directive, Input, OnInit, Renderer2, ElementRef } from "@angular/core";


@Directive({
    selector:'[appRoundBlock]'
})
export class RoundBlockDirective implements OnInit{
    @Input() appRoundBlock: string;

constructor(private renderer:Renderer2,private elmRef: ElementRef){
    
}
ngOnInit(){
    this.renderer.setStyle(this.elmRef.nativeElement,'background-color',this.appRoundBlock)
    if(this.appRoundBlock=='red'){
        this.renderer.setStyle(this.elmRef.nativeElement,'color','white')
    }
    else{
        this.renderer.setStyle(this.elmRef.nativeElement,'color','yellow')
    }
    }
}