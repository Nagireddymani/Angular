import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Groups } from '../groups';
import { Contacts } from '../contacts';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private dataService:DataServiceService) { }
  
  group:Groups[];
  contact:Contacts;
  index:number;

  


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
       (param)=>{
         this.index=param['index'];    
       }
    )
  }
  onClickSubmit(data)
  {
    this.contact=data;
    console.log(this.contact);
    this.dataService.dataList[this.index].contacts.push(this.contact);
    alert("Contact Added Successfully");
  }

}
