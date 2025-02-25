import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { IUser, UserService } from '../user.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css',
  providers: [UserService]
})
export class UserlistComponent implements OnInit {

  userActive: boolean = false

  status = "Y"

  users: IUser[] = []

  

  constructor(private userService: UserService){
    
      console.log("constructor called")
  }

  ngOnInit(): void {
     this.userService.getUsers().subscribe(data => {
        this.users = data
    })
    
  }



  eventX: EventEmitter<string> = new EventEmitter<string>()

  emitEvent(){
    this.eventX.emit("Hello this is event emiting message")
  }


  observable = new Observable((observer)=> {
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.complete()
  })

  fun(){
    this.observable.subscribe({
      next: (data) => console.log(data + "from function 1"),
      complete: () => console.log("Completed"),
      error: (error) => console.error("error", error)
    })
  }


  fun2(){
    this.observable.subscribe({
      next: (data) => console.log(data + "from function 2"),
      complete: () => console.log("Completed"),
      error: (error) => console.error("error", error)
    })
  }
  




}
