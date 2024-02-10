import { Component } from '@angular/core';
import { APP_CONSTANTS } from '../../constants/core.constant';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  appConstants = APP_CONSTANTS;
}
