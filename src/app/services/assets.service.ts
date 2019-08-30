import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const config={
  "assetUrl": "api/assets",
  "subAssetUrl": "api/sub-assets",
  'mdataUrl':'api/mdata',
  'smsUrl':'api/sms'
}

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  public url;
  constructor(private http:HttpClient) { 
    this.url="https://jsonplaceholder.typicode.com/posts";
  }

  getAll(){
     return  this.http.get(this.url);
/*       .subscribe(response=>{
          console.log(response);
      },(error)=>{
        console.log(error);
      }); */
      
  }

  getById(){
  }


}
