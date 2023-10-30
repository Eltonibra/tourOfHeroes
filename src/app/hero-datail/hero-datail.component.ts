import { Component,Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-datail',
  templateUrl: './hero-datail.component.html',
  styleUrls: ['./hero-datail.component.css']
})
export class HeroDatailComponent {
  @Input() hero?: Hero;
}
