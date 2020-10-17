import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'user',
  templateUrl: `./user.component.html`,
  providers: [PostsService]
})
export class UserComponent {
  name: string
  email: string
  address: Address
  hobbies: string[]
  showHobbies: boolean
  posts: Post[]

  constructor(private postsService: PostsService) {
    this.name = "John Doe"
    this.email = "john@gmail.com"
    this.address = {
      street: '12 Main st',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Music', 'Movies', 'Sport']
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      // console.log(posts)
      this.posts = posts
    })
  }

  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby)
  }

  deleteHobby(index) {
    this.hobbies.splice(index, 1)
  }
}

interface Address {
  street: string
  city: string
  state: string
}

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}