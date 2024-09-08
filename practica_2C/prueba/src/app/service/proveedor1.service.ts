import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Proveedor1Service {

  constructor(
    public httpClient: HttpClient
  ) {

   
    console.log('hola proveedor');
  }
  obtenerDatos(){
  return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
