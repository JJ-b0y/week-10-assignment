import { Component, OnInit, signal } from '@angular/core';
import { BackgroundColorService } from '../../../Services/BackgroundColorService/background-color-service';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-resources',
  imports: [NgStyle, NgClass],
  templateUrl: './resources.html',
  styleUrl: './resources.css',
})
export class Resources implements OnInit {
  constructor(private backgroundColorService: BackgroundColorService) {}

  componentName = signal("Resources");

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
