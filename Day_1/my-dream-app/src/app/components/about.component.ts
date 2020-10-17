import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'about',
  template: `
    <h1>About</h1>
    <router-outlet></router-outlet>
  `
})
export class AboutComponent implements OnInit {
  id: number
  foo: string

  // constructor should ONLY be used to initialize the class' attributes
  // the reason: component is easier to test and debug when their constructor is simple,
  // and all the real work is handled in a separate method.
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // params are used to identify specific resource
    // GET /about/:id
    this.route.params.subscribe(params => {
      this.id = params['id']
    })

    // queryParams are used to filter resources
    // GET /about?id=1
    this.route.queryParams.subscribe(params => {
      this.foo = params['foo']
    })
    console.log(`
      ngOnInit this.id=${this.id} this.foo=${this.foo}
    `)
  }
  
}