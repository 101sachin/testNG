import { Component, OnInit } from "@angular/core";
import { AssetsService } from '../../services/assets.service';
@Component({
  selector: "assets",
  templateUrl: "./assets.component.html"
})
export class AssetsComponent implements OnInit {

  private assets;
  private url="http://arresto.in/connect/node_api/assets";
  constructor( private service :AssetsService){
  }

  ngOnInit() {

    this.service.url=this.url;
    
    this.service.getAll()
    .subscribe((response)=>{
      console.log(response);
      this.assets=response;
    }) 
  }

}
