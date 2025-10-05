import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileServise {
  
  constructor(){}

  getProfile(): Profile {

    var profile: Profile = {
      email:'jardelsantosa380@gmail.com',
      name: 'Jardel Oliveira',
      whatsApp: 'https://api.whatsapp.com/send?phone=5599991306442&text=Ol%C3%A1,%20acessei%20o%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!',
      linkedIn: 'https://www.linkedin.com/in/jardel-oliveira-dos-santos-81189a1a2/',
    }

    return profile

  }

}
