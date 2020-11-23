import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Post, PostsService } from 'src/app/services/posts.service';

// TODO:
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [PostsService]
})
export class SearchComponent implements OnInit {
  @ViewChild("search")
  search: ElementRef
  options: {name: string, value: string}[]
  posts: Post[]
  posts$: Post[]

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      // console.log(posts)
      this.posts = posts
      this.posts$ = posts
    })

    this.options = [
      {
        "name": "All",
        "value": ""
      },
      {
        "name": "sunt",
        "value": "sunt"
      }
    ]
  }

  filter(value: string): Post[] {
    return this.posts.filter(post => {
      const filter = value.toLowerCase()
      return post.title.toLowerCase().includes(filter)
    })
  }

  setSearch(value: string) {
    this.posts$ = this.filter(value)
  }

  onDelete(id: number) {
    // do Something api related.
  }

  ngAfterViewInit(): void {
    fromEvent(this.search.nativeElement, 'keydown')
      .pipe(
        debounceTime(550),
        map(event => event['target']['value'])
      ).subscribe(value => {
        this.posts$ = this.filter(value)
      })
  }
}