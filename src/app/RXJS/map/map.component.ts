import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, map } from 'rxjs';
import { CustomeService } from 'src/app/appService/custome.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  //subscriptions
sub1!: Subscription ;
  sub2!:Subscription;
  //messages
  msg1:any;
  msg2:any;
  items=['item1','item2','item3','item4'];
constructor(private _customeservice: CustomeService){

  const broadCastVideos = interval(1000);

  // Ex- 1
  this.sub1=broadCastVideos.pipe(
    map(data =>'Video '+  data)

  )
  .subscribe(res=>{
    // console.log( res);
    this.msg1= res

  })


setTimeout(() => {

  this.sub1.unsubscribe();
}, 10000);




// Ex-2

this.sub2 = broadCastVideos.pipe(
  map(data => data * 3)
)
.subscribe(res =>{
  this.msg2 = res;
  // console.log(res);

})


setTimeout(() => {
  this.sub2.unsubscribe();
}, 10000);


// Ex -3

const  members = from([
  {id: 2, name: 'Madhuri'},
  {id: 3, name: 'Joya'},
  {id: 1, name: 'Saloni'},
  {id: 4, name: 'Janvi'},
  {id: 5, name: 'Manisha'},
  {id: 6, name: 'Aditya'},
  {id: 7, name: 'Krishna'},
  {id: 8, name: 'Trisha'},
]);

members.pipe(
  map(data=>data.name)// will only return name vlaue from incomming array onbservabels
).subscribe(res => {
  console.log(res);
  this._customeservice.print(res, "elContainer")
})




}

AddedNewItem(inpVal:any){
this.items.push(inpVal);
}
}
