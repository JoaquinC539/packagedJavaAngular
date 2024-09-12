import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent implements OnInit {
  constructor(){

  }
  ngOnInit(): void {
      console.log("third")
  }
}
