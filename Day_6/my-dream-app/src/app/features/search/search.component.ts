import { Component, ElementRef, ViewChild } from "@angular/core";
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

// TODO:
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

})
export class SearchComponent {
  @ViewChild("search")
  search: ElementRef

  ngAfterViewInit(): void {
    fromEvent(this.search.nativeElement, 'keydown')
      .pipe(
        debounceTime(550),
        map(event => event['target']['value'])
      ).subscribe(value => {
        console.log(value)
      })
  }
}