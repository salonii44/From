import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-childs',
  templateUrl: './childs.component.html',
  styleUrls: ['./childs.component.css']
})
export class ChildsComponent {
  @Output() NewItem = new EventEmitter();
constructor(){}

addNewItem(inpVal:any){
this.NewItem.emit(inpVal);
}

}
