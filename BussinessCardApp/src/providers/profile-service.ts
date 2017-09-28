import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Person, User } from '../model/person';


@Injectable()
export class ProfileService {

  constructor(public _http: Http) {
    
  }

  getPersonalInfo(): User {
    return new User({
      age: 1,
      alias: 'Alejandro Vargas',
      name: 'Henry Alejandro',
      lastname: 'Vargas Polania',
      birthDate: new Date(1986,4,22),
      numDoc: 1075211187,
      tipeDoc: 'cc',
      
      contact: {
        email: 'alejandro5504@hotmail.com',
        movil: '3165324550',
        phone: ''
      },
      profesionalInfo: {
        company: 'WIN SOLUTIONS',
        companyId: '813011565-5',
        title: 'Ing.',
        position: 'Gerente Operativo',
        admissionDate: new Date(),
        companyTmbr: null
      },
      image: null
    });
  }
  
}
