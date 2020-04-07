import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { Contacts } from '../contacts';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  index:number;
  contact:Contacts;

  constructor(private activatedRoute:ActivatedRoute,private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (param)=>{
        this.index=param['index'];
        this.contact=this.dataService.dataList[this.dataService.index].contacts[this.index];
        console.log(this.contact);
        
      }
    )
  }
  onClickSubmit(data)
  {
      this.dataService.dataList[this.dataService.index].contacts[this.index].contactId=this.contact.contactId;
      this.dataService.dataList[this.dataService.index].contacts[this.index].firstName=this.contact.firstName;
      this.dataService.dataList[this.dataService.index].contacts[this.index].lastName=this.contact.lastName;
      this.dataService.dataList[this.dataService.index].contacts[this.index].mobileNumber=this.contact.mobileNumber;
      this.dataService.dataList[this.dataService.index].contacts[this.index].mailId=this.contact.mailId;
      this.dataService.dataList[this.dataService.index].contacts[this.index].dateOfBirth=this.contact.dateOfBirth;
      this.dataService.dataList[this.dataService.index].contacts[this.index].doorNo=this.contact.doorNo;
      this.dataService.dataList[this.dataService.index].contacts[this.index].appartmentName=this.contact.appartmentName;
      this.dataService.dataList[this.dataService.index].contacts[this.index].street=this.contact.street;
      this.dataService.dataList[this.dataService.index].contacts[this.index].city=this.contact.city;
      this.dataService.dataList[this.dataService.index].contacts[this.index].country=this.contact.country;
      this.dataService.dataList[this.dataService.index].contacts[this.index].pincode=this.contact.pincode;
      alert("Contact Updated Succussfully");
  }

  
}
