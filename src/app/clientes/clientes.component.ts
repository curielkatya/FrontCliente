import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ClienteInterface } from '../interfaces/ClienteInterface';
import { MatDialog } from '@angular/material/dialog';
import { ActualizarClienteComponent } from '../actualizar-cliente/actualizar-cliente.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
// nuestros datos
  dataSource: any = [];
  displayedColumns: string []=['nombres','apellidos','direccion', 'Acciones'];

  constructor( private service: ClienteService,
                private dialog: MatDialog) { }

  ngOnInit(): void {

    this.service.getClientes().subscribe((data: any)=> {
        //llenar dataSource
      this.dataSource = new MatTableDataSource<ClienteInterface>(data.result as ClienteInterface []);

      console.log(data);

    });
  }
  actualizarCliente(cliente: ClienteInterface){
    console.log(cliente);
    
    this.dialog.open(ActualizarClienteComponent,{
      data: {
        nombres: cliente.nombres,
        apellidos: cliente.apellidos,
        direccion: cliente.direccion,
        telefono : cliente.telefono,
        id: cliente.id
      }
    })
  }

}
