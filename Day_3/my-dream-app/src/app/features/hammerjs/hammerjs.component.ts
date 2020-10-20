import { Component, ViewChild } from "@angular/core";

import { trigger, keyframes, animate, transition } from '@angular/animations'
import * as kf from './keyframes'

@Component({
  selector: 'hammerjs',
  templateUrl: "./hammerjs.component.html",
  styleUrls: ["./hammerjs.component.css"],
  animations: [
    trigger('cardAnimator', [
      transition('* => wobble', animate(1000, keyframes(kf.wobble))),
      transition('* => swing', animate(1000, keyframes(kf.swing))),
      transition('* => jello', animate(1000, keyframes(kf.jello))),
      transition('* => zoomOutRight', animate(1000, keyframes(kf.zoomOutRight))),
      transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
      transition('* => rotateOutUpRight', animate(1000, keyframes(kf.rotateOutUpRight))),
      transition('* => flipOutY', animate(1000, keyframes(kf.flipOutY)))
    ])
  ]
})
export class HammerJSComponent {
  direction: string = ""
  animationState: string
  x: number
  y: number

  onSwipe(event) {
    console.log(event.type)
    const x =
      Math.abs(
        event.deltaX) > 40 ? (event.deltaX > 0 ? "Right" : "Left") : ""
    const y =
      Math.abs(
        event.deltaY) > 40 ? (event.deltaY > 0 ? "Down" : "Up") : ""

    this.direction +=
      `You swiped in <b> ${x} ${y} </b> direction <hr>`
  }

  startAnimation(state) {
    console.log(state)
    if (!this.animationState) {
      this.animationState = state
    }
  }

  resetAnimationState() {
    this.animationState = ''
  }

  onPan(event) {
    this.x = event.deltaX
    this.y = event.deltaY
  }

  onPanEnd() {
    this.x = 0
    this.y = 0
  }
}