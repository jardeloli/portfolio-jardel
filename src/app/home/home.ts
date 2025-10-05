import { Component } from '@angular/core';
import { ProfileServise } from '../services/profile';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(private profileService: ProfileServise){}

}
