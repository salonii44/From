import { Component , EventEmitter,Input,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  name='sakmklmclkadmc'
  childData='Data from child component';
  nname=''
  value=''
  index:any=''
  todoList:[]=[];

  // @Input() Employeename:string='';
  // @Input() Employeeobj:any=''


  constructor(){}
// @Output() greetEvent = new EventEmitter();

ngOnInit(): void {

}

  callParentGreet(){
    // this.greetEvent.emit(this.name);
  }
  // add_todo(item:any){

  }

//   deleteItem(index:any){
//   console.log(index)
//   this.todoList.splice(index, 1)
//   console.log(this.todoList)

//   this.index=this.todoList.length

//  }



