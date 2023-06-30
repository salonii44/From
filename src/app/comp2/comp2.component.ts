import { Component, OnInit } from '@angular/core';
import { CustomeService } from '../appService/custome.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  username="Saloni";
constructor( private _customeservice:CustomeService){
  _customeservice.username.subscribe(res=>{
    this.username = res;
  })

}

onChange(uname:any){
  console.log(uname.value);
  this._customeservice.username.next(uname.value)
  
}
}