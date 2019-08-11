import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ModalDismissDirective } from '../../directives/modal-dismiss.directive';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, OnChanges {

  @ViewChild('myModal') myModal : ElementRef;
  @ViewChild('modalBackdrop') modalBackdrop : ElementRef;
  @Input() displayData : {};
  modalDisplay = 'none';

  constructor() { }

  ngOnInit() {
    // this.modalDisplay = 'block';
    
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log("inside dialog ngonChanges");
    this.modalDisplay = 'block';
    // this.myModal.nativeElement.style.display = 'block';
    this.modalBackdrop.nativeElement.style.display = 'block';
  }  


  onCloseModal = () => {
    // console.log("inside on close modal");
    this.modalDisplay = 'none';
    // this.myModal.nativeElement.style.display = 'none';
    this.modalBackdrop.nativeElement.style.display = 'none';
    
   
  }

}
