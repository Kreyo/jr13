import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { BlogComponent } from './blog/blog.component';
import { ModalComponent } from './modal/modal.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { DogsComponent } from './dogs/dogs.component';
import { BreedComponent } from './breed/breed.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'blog/:id', component: BlogItemComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'breed/:id', component: BreedComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    BlogComponent,
    ModalComponent,
    BlogPostComponent,
    RegisterComponent,
    HomeComponent,
    BlogItemComponent,
    DogsComponent,
    BreedComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
