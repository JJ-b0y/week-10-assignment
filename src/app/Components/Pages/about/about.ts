import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  componentName = signal("About");
}
