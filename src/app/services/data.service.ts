import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService{

    constructor( private url:string, private http:HttpClient){
    }

    getAll() {
        return this.http.get(this.url)
      }
      
    
/*       get(id) { 
        return this.http.get(this.url + '/' + id)
          .map(response => response.json())
          .catch(this.handleError);    
      }
    
      create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
          .map(response => response.json())
          .catch(this.handleError);
      }
    
      update(resource) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
          .map(response => response.json())      
          .catch(this.handleError);
      }
    
      delete(id) {
        return this.http.delete(this.url + '/' + id)
          .map(response => response.json())
          .toPromise()
          .catch(this.handleError);
      }
     */



}