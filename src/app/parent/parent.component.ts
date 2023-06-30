import { Component, ViewChild, ElementRef, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ProductsService } from '../appService/products.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  text = ''
  userData: any = ''
 childDataReceived: string = '';


  @ViewChild('box') 'box': ElementRef;

  constructor(private Products:ProductsService) {

   }
  products = [
    {

      name: 'Laptop',
      price: '$1210'
    },
    {

      name: 'Phone',
      price: 1500
    },
    {

      name: 'Washing Matchine',
      price: 45000
    },
    {

      name: 'Television',
      price: 50000
    }
  ]



  greet(name: any) {
    alert(" Hello" + name)
  }
  Emp = 'saloni'
  Ename: string = 'ndmdskkmsksms';
  objname: any = {
    name: 'saloni',
    age: 19,
    course: 'deploma'
  }


  receivedData(event: any) {
    this.childDataReceived = event
  }

  getUserData(data: any) {

    console.log(data)
  }
  onAddProduct(name: any, price: any) {
    this.products.push({

      name: name.value,
      price: price.value
    })

  }
  onSaveProduct(){
    this.Products.saveProducts(this.products).subscribe(
      (Response)=>console.log(Response),
      (err)=> console.log(err)

      )

    }

  onDeleteProduct(id: any) {
    if(confirm ('Do you want to delete this product?')) {

      this.products.splice(id, 1)
    }


  }


}

