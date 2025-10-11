import { Component } from '@angular/core';
import { Profile, ProfileServise } from '../services/profile';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

  constructor(private profileService: ProfileServise){}

  profile?: Profile;

  ngOnInit(){
    this.profile = this.profileService.getProfile();

  }

}
