import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-opportunities',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './opportunities.html',
  styleUrl: './opportunities.css',
})
export class Opportunities {
  
  componentName = signal("Opportunities");

  progressUnsaved = true;

}
