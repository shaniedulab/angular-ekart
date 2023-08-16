import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})
export class SetBackground implements OnInit{
    // private element: ElementRef
    // private renderer: Renderer2;
    //shortcut way to create a private property
    // @Input('setBackground') backColor: string='#36454F';
    // @Input() textColor: string='white';

    @Input('setBackground') changTextAndBackColor: {backColor:string,textColor:string};

    constructor(private element: ElementRef,private renderer: Renderer2){
        // this.element = element
        // this.renderer = renderer;
    }

    ngOnInit(){
        // this.element.nativeElement.style.background='#36454F';
        // this.element.nativeElement.style.color='white';
        this.renderer.setStyle(this.element.nativeElement,'background-color',this.changTextAndBackColor.backColor)
        this.renderer.setStyle(this.element.nativeElement,'color',this.changTextAndBackColor.textColor)
        // this.renderer.setAttribute(this.element.nativeElement,'title','This is the Title')
    }
}