import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable, Subject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomeService {
//  url='https://jsonplaceholder.typicode.com/users';
// url='https://jsonplaceholder.typicode.com/todos'
//  url2='https://jsonplaceholder.typicode.com/comments'

  // constructor(private http:HttpClient) {  }
  // users(){
  //   return this.http.get(this.url)
  // }
  // saveUsers(data:any){
  //   return this.http.post(this.url,data)
  // }
  Exclusive= new Subject<boolean>();
  username = new  Subject<string>();
  srcObject = from([
    { fName: 'Sachin', lName: "Tendulkar" },
    { fName: 'Rahul', lName: "Dravid" },
    { fName: 'Saurav', lName: "Ganguly" },
  ]);
  getProductsData(){
  return [
    {
      code:"f230fh0g3",
    name:"Bamboo Watch	" ,
    category:"Accessories",
    quantity:"21"
    },
    {
      code:"f230fh0g3",
    name:"Bamboo Watch	" ,
    category:"Accessories",
    quantity:"21"
    },
    {
      code:"f230fh0g3",
    name:"Bamboo Watch	" ,
    category:"Accessories",
    quantity:"21"
    },
    {
      code:"f230fh0g3",
    name:"Bamboo Watch	" ,
    category:"Accessories",
    quantity:"21"
    },
  ]
}



constructor(){}
print(val: any, containerId?: any) {
  // append li inside ul - create li item inside ul
  let el = document.createElement('li'); // create element of li
  el.innerText = val; //set the inner text
  document.getElementById(containerId)?.appendChild(el); // get element by id and append it with el
}

  // users():Observable<any>{
  //   return this.http.get(this.url)
  // }


// saveUsersData(userForm : any){
//   return this.http.post('https://jsonplaceholder.typicode.com/todos',userForm).subscribe((result)=>{
//     console.log(userForm)
//   })
// }


getProductsMini() {
  return Promise.resolve(this.getProductsData().slice(0, 5));
}
    MessageChannel(){
      alert('Please wait show message')

   }
   onshow(){
    alert('Show message ')
   }

    }
