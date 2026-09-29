import { Component, OnInit, signal } from '@angular/core';
import { BackgroundColorService } from '../../../Services/BackgroundColorService/background-color-service';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [NgStyle, NgClass],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  constructor(private backgroundColorService: BackgroundColorService) {}

  componentName = signal("About");

  backgroundColor: string = '';

  isBlackBackground: boolean = false;

  ngOnInit(): void {
    // Subject
    // this.backgroundColorService.$selectedBgColor.subscribe({
    //   next:(value) => {
    //     console.log(`I have received the value: "${value}" from the Subject`)
    //     this.backgroundColor = value;
    //     if (this.backgroundColor === "black") {
    //       this.isBlackBackground = true;
    //     } else {
    //       this.isBlackBackground = false;
    //     }
    //   },
    //   error:(err) => {
    //     console.error("Failed to receive value: ", err);
    //   },
    // });

    // Behavior Subject
    this.backgroundColorService.$selectedBGColorBehaviorSubject.subscribe({
      next:(value) => {
        console.log(`I have received the value: "${value}" from the Behavior Subject`)
        this.backgroundColor = value;
        if (this.backgroundColor === "black") {
          this.isBlackBackground = true;
        } else {
          this.isBlackBackground = false;
        }
      },
      error:(err) => {
        console.error("Failed to receive value: ", err);
      },
    });
  }
}
