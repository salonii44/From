import { Component, EventEmitter, Output } from '@angular/core';
import { CustomeService } from '../appService/custome.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
@Output() buttonWasClicked= new EventEmitter<void>();

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
onButtonClicked(){
  this.buttonWasClicked.emit()
}
}
