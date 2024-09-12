import { Component ,OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'front';
  public users:any;
  constructor(private apiService:ApiService){
    this.users={};
  }
  ngOnInit(): void {
    // this.apiService.getUsers().subscribe(data=>{
    //   console.log(data)
    //   this.users=JSON.parse(data);
    //   console.log(this.users);
    // });
}
}
