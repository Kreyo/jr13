import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  modalOpened = false;
  maxBlogpostId = 5;
  news = [
    {
      title: 'News title 1',
      description: 'This is a sample news object shown in left corner',
      enabled: true,
    },
    {
      title: 'News title 2',
      description: 'This is a sample news object shown in left corner',
      enabled: true,
    },
    {
      title: 'News title 3',
      description: 'This is a sample news object shown in left corner',
      enabled: true,
    },
    {
      title: 'News title 4',
      description: 'This is a sample news object shown in left corner',
      enabled: true,
    },
  ];

  blogPosts = [
    {
      id: 1,
      title: 'blog title 1',
      description: 'This is a sample blog object shown in left corner',
      enabled: true,
    },
    {
      id: 2,
      title: 'blog title 2',
      description: 'This is a sample blog object shown in left corner',
      enabled: true,
    },
    {
      id: 3,
      title: 'blog title 3',
      description: 'This is a sample blog object shown in left corner',
      enabled: false,
    },
    {
      id: 4,
      title: 'blog title 4',
      description: 'This is a sample blog object shown in left corner',
      enabled: true,
    },
  ];

  toggleModal(toggle: boolean) {
    this.modalOpened = toggle;
  }

  addBlogRecord(blogRecord: any) {
    const newRecord = { ...blogRecord, id: this.maxBlogpostId };
    this.blogPosts.push(newRecord);
    this.maxBlogpostId++;
  }

  remove(id: number) {
    this.blogPosts = this.blogPosts.filter(blogPost => blogPost.id !== id);
  }

}
