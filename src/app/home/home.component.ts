import { Component,ElementRef,EventEmitter,Input,OnInit, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import{ NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../appService/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username="Saloni";
  @Output() newItemEvent = new EventEmitter <string>();

  @ViewChild('myForm') myForm:NgForm | undefined;
  value='saloni bhagale';
  InputVal='';
  date=new Date();
  defaultCourse='Angular'
  userName=''
  password=''
  genders='Male';
  products!: any[];

  constructor(private _productService: ProductsService){
_productService.Username.subscribe(res=>{
  this.username=res;
})
  }

  productarr=[
    {
      code : 12,
      name :'saloni',
      category:'Accessories',
      quantity : 10


    }

  ]
  items=['item1','item2','item3','item4','item5','item6','item7','item8']

  ngOnInit(): void {

  }
  add(code:number,){
    // this.productarr.push({

    // })

  }


  onChange(uname:any){
console.log(uname.value);
this._productService.Username.next(uname.value);
  }

  addnewItem(value:string){
    this.newItemEvent.emit(value);
  }



  @Input() InputValue:string='abc'
  // onSubmit(form:NgForm){
  //   console.log(form)

  // }


  onSubmit(form: NgForm){
    console.log(form)

    // this.formdata=InpForm.formdata
     console.log()
  }

  AddedItem(inpVal:any){
    this.items.push(inpVal);
  }

  // onSubmit(myForm:NgForm){

  //   console.log(myForm)
  // }

}
