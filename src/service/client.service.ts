import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs'
import { Client } from 'src/interface/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getAllClients(): Observable<Client[]>{
    return this.http.get<Client[]>('https://jsonplaceholder.typicode.com/users')
  }
}
