import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { ClienteInterface } from './interfaces/ClienteInterface';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl: string ='https://localhost:7245/api/Clientes/';

  constructor(private http: HttpClient) { }


  getClientes (){
      return this.http.get(this.baseUrl);
  }
  getCliente(id:number){
    return this.http.get(this.baseUrl+id);

  }
 crearCliente(cliente: any){
  return this.http.post(this.baseUrl,cliente);

 }

 ActualizarCliente( id:number, cliente: ClienteInterface){
    return this.http.put(this.baseUrl+id,cliente);
 }
 deleteCliente(id:number ){
  return this.http.delete(this.baseUrl+id);
 }
}
