import { Component } from '@angular/core';
import { Profile, ProfileServise } from '../services/profile';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {

  constructor(private profileService: ProfileServise) { }

  profile?: Profile;

  date: Date = new Date();

  ngOnInit() {
    this.profile = this.profileService.getProfile();

  }
}
