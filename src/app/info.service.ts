import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  
  getMarcusInfo(){
   let marcus = {
      firstName: 'Marcus',
      lastName: 'Ramirez',
      age: 35,
      codingLanguages: ['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
      bio: 'After 15 years working for the same luxury hotel chain, Marcus decided to make a career change. That career change is web development'
    };

    return marcus;
  }

  getDakotaInfo(){
    let dakota = {
       firstName: 'Dakota',
       lastName: 'Korn',
       age: 27,
       codingLanguages: ['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS']
     };
 
     return dakota;
   }
}
