import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl="/api/user"
  constructor(private http:HttpClient) { 
    
  }
  getUsers():Observable<string>{
    return this.http.get(this.apiUrl,{responseType:'text'});
  }
}
