import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

export class MdataService extends DataService{
    constructor(http:HttpClient){
            super('http://arresto.in/connect/node_api/mdata',http);
    }



}