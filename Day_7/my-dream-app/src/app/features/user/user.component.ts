import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Post, PostsService } from '../../services/posts.service';
import { fromDateToDate } from "./calendar/calendar.component";

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

  fromDate: NgbDate | null
  jsFromDate: string
  toDate: NgbDate | null

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

    this.fromDate = new NgbDate(2020, 10, 15)
    this.toDate = new NgbDate(2020, 10, 16)
    this.jsFromDate = new Date(`${this.fromDate.year}-${this.fromDate.month}-${this.fromDate.day}`).toISOString().split("T")[0]
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

  handleListenCalendar(fromDateToDate: fromDateToDate) {
    this.fromDate = fromDateToDate.fromDate
    this.toDate = fromDateToDate.toDate

    this.jsFromDate = new Date(`${this.fromDate.year}-${this.fromDate.month}-${this.fromDate.day}`).toISOString().split("T")[0]
    console.log(this.jsFromDate)
  }

  handleSendCalendar(value: string) {
    const date = value.split("-")
    this.fromDate = new NgbDate(parseInt(date[0]),parseInt(date[1]),parseInt(date[2]))
  }
}

interface Address {
  street: string
  city: string
  state: string
}