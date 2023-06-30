import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CustomeService } from './appService/custome.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Form-in-angular';
  Exclusive: boolean=false;

constructor(private _customeservice: CustomeService){

}

ngOnInit(): void {
this._customeservice.Exclusive.subscribe(res=>{
  this.Exclusive = res
})
}



}
