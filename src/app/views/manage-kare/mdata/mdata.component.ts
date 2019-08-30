import { Component, OnInit } from '@angular/core';
import { MdataService } from '../../../services/mdata.service';

@Component({
  selector: 'app-mdata',
  templateUrl: './mdata.component.html',
  styleUrls: ['./mdata.component.scss']
})
export class MdataComponent implements OnInit {

  private mdataSet;

  constructor(private service:MdataService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(response=>{
      this.mdataSet=response;
      console.log(response);
    })
  }

}
