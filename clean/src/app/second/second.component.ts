import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent  implements OnInit{
  // public users:{[key:string]:any};
  public users:any;
  constructor(private apiService:ApiService){
    this.users={};
  }
  ngOnInit(): void {
      this.apiService.getUsers().subscribe(data=>{
        console.log(data)
        this.users=JSON.parse(data);
        console.log(this.users);
      });
  }
}
