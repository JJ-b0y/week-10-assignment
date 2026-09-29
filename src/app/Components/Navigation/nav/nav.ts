import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackgroundColorService } from '../../../Services/BackgroundColorService/background-color-service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  constructor(private bgColorService: BackgroundColorService) {}

  handleBgColorSelection(event: any) {
    event.preventDefault();
    const bgColor = event.target.value;
    console.log("Selected Color: ", bgColor);

    // Subject
    //this.bgColorService.$selectedBgColor.next(bgColor);

    // Behavior Subject
    this.bgColorService.$selectedBGColorBehaviorSubject.next(bgColor);
  }
}
