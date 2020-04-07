import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  public currentDate:string="";
  public currentTime:string="";
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.showDate();
    },1000);
  }
  showDate()
  {
    this.currentDate=new Date().toDateString();
    this.currentTime=new Date().toLocaleTimeString();
  }
}
