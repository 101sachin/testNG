import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../../../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor( private service:ClientService ) {
   }

  ngOnInit() {
    this.service.getAll()
    .subscribe(response=>{
      console.log(response);
    })
  }

}
