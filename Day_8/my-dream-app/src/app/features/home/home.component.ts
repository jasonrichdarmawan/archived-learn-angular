import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { SubscribeService } from 'src/app/services/subscribe.service';
import { Post, PostsService } from '../../services/posts.service';
import { fromDateToDate } from "./calendar/calendar.component";

@Component({
  selector: 'home',
  templateUrl: `./home.component.html`,
  styleUrls: ['./calendar/calendar.component.css'],
  providers: [PostsService, SubscribeService]
})
export class HomeComponent implements OnInit {
  name: string
  email: string
  address: Address
  response: string
  hobbies: string[]
  showHobbies: boolean
  posts: Post[]
  subscribedName: string

  fromDate: NgbDate | null
  jsFromDate: string
  toDate: NgbDate | null

  // constructor should ONLY be used to initialize the class' attributes
  // the reason: component is easier to test and debug when their constructor is simple,
  // and all the real work is handled in a separate method.
  constructor(private postsService: PostsService, private subscribeService: SubscribeService) {

    this.subscribeService
      .subscribeName()
      .subscribe((response: {name: string}) => {
        this.subscribeService.name.next(response.name)
      })
    
    // this code should be on different component e.g ./calendar.component.ts
    // the intention is if ./home.component.ts update the subscribedName attribute, the changes will be applied to the child component too, without @Output
    this.subscribeService.name.subscribe(data => {
      this.subscribedName = data
    })
  }

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