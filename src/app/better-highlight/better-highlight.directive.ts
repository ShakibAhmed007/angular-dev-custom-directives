import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[appBetterHighLight]"
})
export class BetterHighLightDirective implements OnInit {
  @HostBinding("style.backgroundColor") backgroundColor: string = "transparent";

  /* We can use prpperty binding in directives */
  @Input() defaultColor: string;
  @Input() hightlightColor: string;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
    this.backgroundColor = this.defaultColor;
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
    // this.backgroundColor = "blue";
    this.backgroundColor = this.defaultColor;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    /* With renderer */
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );

    /* Without Renderer,  using HostBinding */
    // this.backgroundColor = "transparent";
    this.backgroundColor = this.hightlightColor;
  }
}
