import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ListingService {

  constructor(private http:HttpClient) { }
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

   getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
   updateUser(id: number, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, userData);
  }
}
