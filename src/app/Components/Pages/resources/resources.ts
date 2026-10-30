import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-resources',
  imports: [],
  templateUrl: './resources.html',
  styleUrl: './resources.css',
})
export class Resources {
  
  componentName = signal("Resources");

}
