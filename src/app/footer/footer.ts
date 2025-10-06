import { Component } from '@angular/core';
import { ProfileServise } from '../services/profile';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {

  constructor(private profileService: ProfileServise){}

}
