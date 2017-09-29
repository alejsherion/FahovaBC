import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Person, User } from '../model/person';
import { Contact } from '../model/contacts';


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

  getContacs() : Contact[] {
    let ct: Contact[] = [];

    ct.push(new Contact({alias: 'Brii Suaza', Id: 1, gender: 'F', isFavorite: true}))
    ct.push(new Contact({alias: 'Felipe Beltran', Id: 2, gender: 'M', isFavorite: true}))
    ct.push(new Contact({alias: 'Juan Tamayo', Id: 3, gender: 'M', isFavorite: true}))
    ct.push(new Contact({alias: 'Omar Calderón', Id: 4, gender: 'M', isFavorite: false}))
    ct.push(new Contact({alias: 'John Tumay', Id: 5, gender: 'M', isFavorite: false}))
    ct.push(new Contact({alias: 'Cristian Salzar', Id: 6, gender: 'M', isFavorite: false}))
    ct.push(new Contact({alias: 'Juliana Segura', Id: 7, gender: 'F', isFavorite: false}))
    ct.push(new Contact({alias: 'Camilo Suarez', Id: 8, gender: 'M', isFavorite: true}))
    ct.push(new Contact({alias: 'Diana Vargas', Id: 9, gender: 'F', isFavorite: false}))
    ct.push(new Contact({alias: 'Henry Vargas', Id: 1, gender: 'M', isFavorite: true}))
    ct.push(new Contact({alias: 'Natalia Villalobos', Id: 11, gender: 'F', isFavorite: false}))
    ct.push(new Contact({alias: 'Camilo Florez', Id: 12, gender: 'M', isFavorite: false}))
    ct.push(new Contact({alias: 'Rossel Narvaez', Id: 13, gender: 'M', isFavorite: false}))
    ct.push(new Contact({alias: 'Karina Soto', Id: 14, gender: 'F', isFavorite: false}))
    ct.push(new Contact({alias: 'Martha Calderón', Id: 15, gender: 'F', isFavorite: false}))
    ct.push(new Contact({alias: 'Diego Camacho', Id: 16, gender: 'M', isFavorite: false}))

    return ct;
  }
  
}
