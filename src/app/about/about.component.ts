import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { CustomeService } from '../appService/custome.service';
import { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  nameSerch = ''
  value = '';
  // name='Piter'
  // disable=false

  @Input() name = ''
  @ViewChild(NgModel) divElementRef: NgModel | undefined;
  constructor(){

  }
  ngOnInit(): void {

    const subject= new Subject<number>();
  }

  productArr = [
    {
      srno: 1,
      name: 'Mobile',
      price: '15000 Rs',
      available: 'Available'
    },
    {
      srno: 2,
      name: 'Washing machine',
      price: '25000 Rs',
      available: 'Not Available'
    },
    {
      srno: 3,
      name: 'Fridge',
      price: '45000 Rs',
      available: 'Available'
    },
    {
      srno: 4,
      name: 'Television',
      price: '50000 Rs',
      available: 'Not Available'
    }
  ]

  ngAfterViewInit(){

    console.log(this.divElementRef);

  }

  onclick(){

    // const customeservice = new CustomeService();
    // customeservice.MessageChannel()
  }

  added(add: any) {
    this.productArr.push(
      {
        srno: 1,
        name: add.value,
        price: '15000 Rs',
        available: 'Available'
      }
    )
  }





}
