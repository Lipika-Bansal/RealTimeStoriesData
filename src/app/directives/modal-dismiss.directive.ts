import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appModalDismiss]'
})
export class ModalDismissDirective implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit() {
      
  }

  @HostListener('click') mouseClick(eventData: Event) {
    // console.log("inside host listener click event");
    // this.element.nativeElement.firstElementChild.style.display = 'none';
    this.element.nativeElement.style.display = 'none';
  }

}
