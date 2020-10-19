import { Component } from "@angular/core";

@Component({
  selector: 'hammerjs',
  templateUrl: "./hammerjs.component.html",
  styleUrls: ["./hammerjs.component.css"]
})
export class HammerJSComponent {
  direction = "";

  onSwipe(event) {
    const x =
      Math.abs(
        event.deltaX) > 40 ? (event.deltaX > 0 ? "Right" : "Left") : "";
    const y =
      Math.abs(
        event.deltaY) > 40 ? (event.deltaY > 0 ? "Down" : "Up") : "";

    this.direction +=
      `You swiped in <b> ${x} ${y} </b> direction <hr>`;
  }
}