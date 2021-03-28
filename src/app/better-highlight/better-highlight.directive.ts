import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[appBetterHighLight]"
})
export class BetterHighLightDirective implements OnInit {
  @HostBinding("style.backgroundColor") backgroundColor: string = "transparent";
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
  }

  /*
  Using HostListener decorator to react on mouse enter and leave
  */

  @HostListener("mouseenter") mouseenter(eventData: Event) {
    /* With renderer */
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );

    /* Without Renderer, using HostBinding */
    this.backgroundColor = "blue";
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    /* With renderer */
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );

    /* Without Renderer,  using HostBinding */
    this.backgroundColor = "transparent";
  }
}
