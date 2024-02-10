import { Component } from '@angular/core';
import { APP_CONSTANTS } from '../../constants/core.constant';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  appConstants = APP_CONSTANTS;
}
