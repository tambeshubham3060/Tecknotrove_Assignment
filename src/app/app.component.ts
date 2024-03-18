import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { from, fromEvent, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tecknotrove';
  sideBarOpen: boolean = false;
  subscription;
  constructor(public router: Router) {
    this.subscription = from(this.events).pipe(
      mergeMap(event => fromEvent(document, event))
    ).subscribe(
      res => res.preventDefault()
    )
  }
  events: string[] = [];
  // events:string[] = ['cut','copy','paste'];



  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
    console.log(this.sideBarOpen)
  }
  public closeSideBarWhilePrinting() {
    this.sideBarOpen = false
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHander() {
    this.subscription.unsubscribe();
  }

}
