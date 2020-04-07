import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Groups } from './groups';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  index:number;
  
  dataList:Groups[];
  constructor(private httpClient:HttpClient) {
      httpClient.get("/assets/data.json").subscribe(
        (data:Groups[])=>
        {
            this.dataList=data["groups"];
        }
      )
   }
}
