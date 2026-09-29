import { Component, OnInit, signal } from '@angular/core';
import { BackgroundColorService } from '../../../Services/BackgroundColorService/background-color-service';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-community',
  imports: [NgStyle, NgClass],
  templateUrl: './community.html',
  styleUrl: './community.css',
})
export class Community implements OnInit {
  constructor(private backgroundColorService: BackgroundColorService) {}

  componentName = signal("Community");

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
