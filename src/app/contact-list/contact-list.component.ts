import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacts } from '../contacts';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  index:number;
  contactList:Contacts[];

  constructor(private activatedRoute:ActivatedRoute,private dataService:DataServiceService,private router:Router) { }

  ngOnInit(): void {
     this.activatedRoute.params.subscribe(
     (param)=>
     {
      this.index=param['index'];
      this.contactList=this.dataService.dataList[this.index].contacts;
     }
     )
  }

  deleteContact(index:number)
  {
       if(confirm(" Are you sure "))
       {
        this.dataService.dataList[this.index].contacts.splice(index,1);
        alert("Contact deleted Succussfully");
       }
       
  }

  updateContact(index:number)
  {
    this.router.navigate(["/update/"+index]);
  }


}
