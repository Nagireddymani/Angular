import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { GroupsListComponent } from '../groups-list/groups-list.component';
import { Groups } from '../groups';

@Component({
  selector: 'app-search-group',
  templateUrl: './search-group.component.html',
  styleUrls: ['./search-group.component.css']
})
export class SearchGroupComponent implements OnInit {

  group:Groups;
  view:boolean=false;
  noOfContacts:number;
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
  }
  
  searchGroup(searchText:number)
  {
    this.dataService.dataList.filter(
      (b)=>{
        if(b.groupId==searchText)
        {
           this.group=b;
        }
                                           
     });
     
    this.noOfContacts=this.group.contacts.length;
 
    if(this.group!=null)
    {
       this.view=true;
    }
    else
    {
       alert("Enter Correct Id");
    }
    
  }
}
