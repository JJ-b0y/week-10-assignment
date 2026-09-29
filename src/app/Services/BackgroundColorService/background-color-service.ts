import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackgroundColorService {
  defaultBgColor: string = "white";

  constructor() {
    // Subject
    this.$selectedBgColor.subscribe({
      next: (value) => {
        this.defaultBgColor = value;
      },
      error: (err) => {
        console.error(err);
      }
    });

    // Behavior Subject
    this.$selectedBGColorBehaviorSubject.subscribe({
      next: (value) => {
        this.defaultBgColor = value;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  $selectedBgColor: Subject<string> = new Subject<string>();

  $selectedBGColorBehaviorSubject: BehaviorSubject<string> = new BehaviorSubject<string>("white");

}
