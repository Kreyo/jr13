import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
	@Input() blogs!: any[];
	@Output() modalButtonClicked = new EventEmitter<boolean>();
	@Output() deleteBlogpostClicked = new EventEmitter<number>();
	@Output() disableClicked = new EventEmitter<number>();

	constructor() { }

	ngOnInit(): void {
	}

	triggerModalEvent(): void {
		this.modalButtonClicked.emit(true);
	}

	onDeleteClick($event: number): void {
		this.deleteBlogpostClicked.emit($event);
	}
	onDisableButtonClick($event: number): void {
		this.disableClicked.emit($event);
	}
}
