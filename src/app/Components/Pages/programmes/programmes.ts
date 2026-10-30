import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-programmes',
  imports: [],
  templateUrl: './programmes.html',
  styleUrl: './programmes.css',
})
export class Programmes {
  
  componentName = signal("Programmes");

}
