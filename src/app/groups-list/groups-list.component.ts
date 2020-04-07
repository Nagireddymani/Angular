import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Groups } from '../groups';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {
   
  dataList:Groups[];

  constructor(private dataService:DataServiceService,private router:Router) { }

  ngOnInit(): void {
    this.dataList=this.dataService.dataList;
    console.log(this.dataList);
    
  }
  addContact(index:number)
  {
    this.router.navigate(["/add/"+index]);
  }
  viewContact(index:number)
  {
    this.dataService.index=index;
    this.router.navigate(["/view/"+index]) 
  }

}
