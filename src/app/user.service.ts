import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IUser{
  id: number,
  login: string,
  avatar_url: string
  
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient){}

  
backendUrl = 'https://api.github.com/users'

  //  private users: IUser[] = [
   
  // ]


    getUsers(): Observable<IUser[]>{
      // users get
      const users = this.http.get<IUser[]>(this.backendUrl)
      return users;
    }

    // getSingleUser(id: number): IUser{
    //   const user = this.users.filter(user => user.id === id)
    //   if(user.length > 0){
    //     return user[0]
    //   }
    //   return {
    //     id: 0,
    //     name: "",
    //     isActive: false
    //   };
    // }
}
