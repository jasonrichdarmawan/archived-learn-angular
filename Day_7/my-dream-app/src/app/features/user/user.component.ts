import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post, PostsService } from '../../services/posts.service';

@Component({
  selector: 'user',
  templateUrl: `./user.component.html`,
  styleUrls: ['./calendar/calendar.component.css'],
  providers: [PostsService]
})
export class UserComponent implements OnInit {
  name: string
  email: string
  address: Address
  response: string
  hobbies: string[]
  showHobbies: boolean
  posts: Post[]

  // constructor should ONLY be used to initialize the class' attributes
  // the reason: component is easier to test and debug when their constructor is simple,
  // and all the real work is handled in a separate method.
  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.name = "John Doe"
    this.email = "john@gmail.com"
    this.address = {
      street: '12 Main st',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Music', 'Movies', 'Sport']
    this.showHobbies = false

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

  handleSubmit(f: NgForm) {
    if (f.valid) {
      this.response = "Valid"
    } else if (f.invalid) {
      this.response = "Invalid"
    }
  }
}

interface Address {
  street: string
  city: string
  state: string
}