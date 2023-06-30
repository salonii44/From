import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

email=''
password=''
  newItemEvent: any;
// UserData: NgForm;



  addnewItem(value:string){
    this.newItemEvent.emit(value);
  }



  onSubmit(form: NgForm){
    console.log(form)

    // this.formdata=InpForm.formdata
     console.log()
  }

}
