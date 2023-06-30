import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { CustomeService } from '../appService/custome.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit{
// value=''
url= 'https://jsonplaceholder.typicode.com/users';

todoList:any[]=[];
userCount:any[]=[]
index:any='';
users:any;
items = ['item1','item2','item3','item4','item5','item6']

constructor(private el:ElementRef, private custservice:CustomeService){

}

// @HostListener ('click') myclick(){
//   alert('Clicked')
// }

@HostListener ('mousedown') mousedown(){
  // alert('Mouse down')
}


ngOnInit(): void {


}

click(){
  this.custservice.MessageChannel()
}

addItem(newitem:string){
this.items.push(newitem)
}
add_todo(item:any){
// console.log(item)
// this.todoList.push(
  // )
  this.todoList.push(item);
console.log(this.todoList)

if(this.todoList.length == 0){
  console.log('0');


}
else{
  this.index=this.todoList.length
}


// console.log(this.todoList.index)

 }
 deleteItem(index:any){
  console.log(index)
  this.todoList.splice(index, 1)
  console.log(this.todoList)

  this.index=this.todoList.length

 }




  }


