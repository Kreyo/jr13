import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-blog-post',
	templateUrl: './blog-post.component.html',
	styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
	@Input() blogPost!: any;
	@Output() deleteClicked = new EventEmitter<number>();
	@Output() disableClicked = new EventEmitter<number>();

	constructor() { }

	ngOnInit(): void {
	}

	onDeleteClick() {
		this.deleteClicked.emit(this.blogPost.id);
	}
	onDisableButtonClick() {
		this.disableClicked.emit(this.blogPost.id);
	}
}
