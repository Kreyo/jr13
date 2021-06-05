import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() closeButtonClicked = new EventEmitter<boolean>();
  @Output() blogAddTriggeredFromModal = new EventEmitter<any>();

  form: any = {
    title: '',
    description: '',
    enabled: false,
  }

  constructor() { }

  ngOnInit(): void {
  }

  triggerCloseEvent(): void {
    this.closeButtonClicked.emit(false);
  }

  triggerBlogAddRecord(): void {
    this.blogAddTriggeredFromModal.emit(JSON.parse(JSON.stringify(this.form)));
    this.closeButtonClicked.emit(false);
    this.form.title = '';
    this.form.description = '';
    this.form.enabled = false;
  }
}
