import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgControl } from '@angular/forms';
import { datamodel } from '../form/model';


@Injectable({
  providedIn: 'root',

})
export class UserdataService {

  url='http://localhost:3000/Users';
  constructor(private http: HttpClient){
  }


  // saveProducts(products: any[]) {
  //   return this.http.post('https://products-d1367-default-rtdb.firebaseio.com/products.json', products)
  //  }
  usersignup(data:datamodel){

    return this.http.post<datamodel>('http://localhost:3000/Users',data)
    .subscribe((result) => {
		})
  }

    getUser(){

      return this.http.get<datamodel[]>("http://localhost:3000/Users")
    }


    fetchdata(userid:number){
      return this.http.get<datamodel>("http://localhost:3000/Users"+userid)
    }




  userDelete(userid:any){
    return this.http.delete(`${this.url}/${userid}`)
    // return this.http.delete("http://localhost:3000/Users/"+userid+'.json').subscribe((res) => {
      // console.log(userid);
// this.fetchdata();


  // })
}

updateuser(data:datamodel, userid:number){

  return this.http.put<datamodel>("http://localhost:3000/Users"+ userid , data)

}

}
