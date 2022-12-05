import { Component, OnInit } from '@angular/core';
import { Client } from 'src/interface/client';
import { ClientService } from 'src/service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients!: Client[];
  constructor(private clientService: ClientService) {

  }

  ngOnInit(): void {
  this.onGetClient()
  }
  onGetClient() {
    this.clientService.getAllClients().subscribe(
      (response: Client[]) => {
        this.clients = response
        console.log(response,'this is my response')
      }
    )
  }
}
