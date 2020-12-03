import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { SubscribeService } from 'src/app/services/subscribe.service';

export interface fromDateToDate {
  fromDate: NgbDate
  toDate: NgbDate
}
@Component({
  selector: 'calendar-component',
  templateUrl: `./calendar.component.html`,
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  @Output() onChange: EventEmitter<fromDateToDate> = new EventEmitter<fromDateToDate>();
  hoveredDate: NgbDate | null
  @Input() fromDate: NgbDate | null
  @Input() toDate: NgbDate | null
  subscribedName: string

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, private subscribeService: SubscribeService) { }

  ngOnInit(): void {
    /**
     * redudant line of code for a component which use @Input() and @Output()
     */
    // this.fromDate = this.calendar.getToday()
    // this.toDate = this.calendar.getNext(this.calendar.getToday(), 'd', 10)

    this.subscribeService.name.subscribe(data => {
      this.subscribedName = data
    })
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
      this.onChange.emit({fromDate: this.fromDate, toDate: this.toDate})
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

}