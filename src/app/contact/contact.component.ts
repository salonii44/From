import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, SimpleChanges, ViewChild,AfterViewInit, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CustomeService } from '../appService/custome.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductsService } from '../appService/products.service';
import { Product } from './product';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public mode = 'create';
  username="Saloni";
  name = ''
  text = '';
  // value: any = '';
  todaysDate:number =  Date. now()
  userForm:any=''
  // Employee=''
  // [{UserId:'number',title:'string',completed:'boolean'}]
  // num='67879887746'
  // childDataReceived:string='';
  // users: any = ''
  // username:string='Uxtrendz'

  InpName = 'salonibhagale'

  @Input() item='';
sizes: any;
selectedSize: any;
  products!: any[];
// products: Product[];
   // @Output() addNewItem = new EventEmitter<string>();
// send: any;
// selectedSize:any='';


  // @ViewChild('Item')
  // ItemRef!: ElementRef;
  // products: any[] = [];


constructor(private customeservice: CustomeService, private _productservice:ProductsService) {
//    this.customeservice.users().subscribe((data) => {
//      this.users = data
//      console.warn("data", data);
//  });
_productservice.Username.subscribe(res=>{
  this.username = res;
})

}

  ngOnInit(): void {
    // console.log(this.reItem,"OnInit");



this.customeservice.getProductsMini().then((data)=>{
  this.products = data;
})
  }

  onChange(uname:any){
this._productservice.Username.next(uname.value)
  }

  // ngAfterViewInit(): void{

    // this.ItemRef.nativeElement.style.background= "blue";
    // console.log(this.Item);
    // this.ItemRef.nativeElement.style.backgroundColor ="blue"
  // }
  // sendToParent(value:any){
  // }
  // getUserFormData(userForm: object) {

    // this.customeservice.saveUsersData(this.userForm.value)

      // console.log(this.userForm.values);
      // console.warn(data);



  // }


  // onadded(added:any){

  //   this.value=added.value;
  // }

  // addval(added: any) {
    // this.value = added.value;
  // }
  //   Onclick(inputval:any){
  // this.valu=inputval.valu;
  //   }


  // receivedData(event:any):void {
  //   this.childDataReceived=event;

  // }

  cols=[
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'category', header: 'Category' },
    { field: 'quantity', header: 'Quantity' }
  ]
}
