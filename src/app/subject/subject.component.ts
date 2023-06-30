import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CustomeService } from '../appService/custome.service';
import * as moment from 'moment';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})


export class SubjectComponent implements OnInit, OnDestroy{
  username="Saloni";
  currentTime:any;
  current:any;
  message:string="";
  yearEnd:any;
  result:any;
  result2:any;
  sentences:any;
@Output() NewItem = new EventEmitter<any>();

constructor(private _customservice: CustomeService){
  _customservice.username.subscribe(res=>{
    this.username = res;

  })

}
ngOnInit(): void {

  // this.currentTime =moment().startOf('month').format('YYYY-MM-DD')
  // this.current= moment().format('LTS')
  // this.current= moment.locale();
//   this.current= moment().endOf('month').format('YYYY-MM-DD');
// const m = moment();

//   console.log("Add methods: ", moment().add(4, 'months').endOf('month').format('YYYY-MM-DD'));
//   console.log("substract methods: ", moment().subtract(4, 'months').endOf('month').format('YYYY-MM-DD'));
//   console.log(moment().startOf('month').format('YYYY-MM-DD'));
//   console.log(m.startOf("day"));
//   console.log(moment().startOf('month'), "Startof the month");
//   console.log(moment().startOf('hour'),"hours time");

//   console.log(moment().minutes(0).seconds(0).milliseconds(0) ,"Moments example")

//   console.log(`original Moment: ${m.toString()}`);

//   m.add(4,"hours").add(15, "minutes")
  // console.log(m.endOf("day"));
  // console.log(`Manipulate Moment: ${m.toISOString()}`);

//   console.log(moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD'));
//   console.log(moment().subtract(4, 'months').endOf('month').format('YYYY-MM-DD'));
//   console.log("EndOf Year", moment().subtract(1, 'years').add(10, 'months').startOf('month').format('YYYY-MM-DD'));

//  console.log(` ( ${moment().year() - 1} - ${moment().format('YY')} )`);


  // new Date(moment().endOf('month').format('YYYY-MM-DD')),
  // console.log("Using Date",new Date(moment().format('YYYY-MM-DD')));
  // console.log("Using Moment",(moment().format('YYYY-MM-DD')));
// console.log(moment([2010, 0, 31]));
// console.log(moment([2010, 0, 31]).add(1, 'months'));

// console.log(moment().max(moment().add(1, 'd')));

// console.log(new Date(moment().subtract(1, 'years').add(9, 'months').endOf('month').format('YYYY-MM-DD'))) // 30 Dec
// let dur = moment.duration(5000)
//  let dur = moment.duration(5,"seconds");
//  dur = moment.duration(5,"hours" )

//  console.log(moment.duration(5, "weeks").days());
//  console.log(moment.duration(5,"weeks").asDays());
// console.log(moment().format('MM/DD/YY'));
// console.log(moment().subtract(5,'months').add(5,'days').format('MM/DD/YY'));
// let  time = new Date(moment().startOf('day')); // returns time at beginning of the day - 12:00am
// let times = moment().startOf('week')// Uses the locale aware start of week day

// let  endOfMonth = moment().endOf("Months")
let one_date= moment().subtract(5, 'months').format('YYYY-MM-DD ')
 console.log(one_date, "start of year");
//  let show_date= new Date();
//  console.log(show_date)
var transaction = {
  Date: new Date('2019-12-24T00:00:00.000Z'),
  // Time: new Date('1754-01-01T07:36:17.647Z')
}

new Date(transaction.Date).setHours(transaction.Date.getFullYear() +1);
console.log(Date)
// console.log(date);
//  let two_date= one_date.moment(add(1, 'years').format('YYYY-MM-DD'));
// const endOfMonth   = moment().add(5 ,'months').endOf('year').format('YYYY-MM-DD hh:mm');

// console.log(moment("27/08/2022", "DD/MM/YYYY").fromNow(false));
// console.log(moment("27/08/2020", "DD/MM/YYYY").fromNow(true));
// console.log(startOfMonth, "Start of month", endOfMonth, "end of month");

// console.log(endOfMonth, "end of the month")

// const time = moment("27/08/2022", "DD/MM/YYYY").from(moment('27/09/2017', "DD/MM/YYYY"));
// console.log(time, "from date")
// console.log(time, "from date1233");
// const time6 = moment("27/08/2022", "DD/MM/YYYY")
// const time7= moment('27/09/2017', "DD/MM/YYYY");
// console.log(time6.to(time7), "to date32111111111");

// console.log(moment('2013-04-01T00:00:00.000').subtract(1, 'ms').quarter()); // 1
// console.log(moment('2013-01-01T00:00:00.000').quarter(2)); // '2013-04-01T00:00:00.000'


// console.log("Current Date:", moment().toString())
// console.log("Current quarter is:", moment().quarter())

// const quarter1 = moment().quarter(1);
// console.log(
//     "Moment with Quarter of 1 is:",
//     quarter1.toString()
// )

// const quarter2 = moment().quarter(2);
// console.log(
//     "Moment with Quarter of 2 is:",
//     quarter2.toString()
// )
// console.log(moment.parseZone("2013-06-13T00:00:00-13:00"));

// var time3 = moment("27/06/2022", "DD/MM/YYYY")
// var time2 = moment("27/03/20224", "DD/MM/YYYY")
// console.log(time3.to(time2)) // in a year



// let date1 = moment("12/2/2022" )
// let date2 = moment("12/12/2022" )
// console.log(date1.to(date2),"to method");
// const date3 = moment("12/03/2022")
// const date4 = moment("1/09/2022")
// console.log(time3.diff(date4, "months"));
// console.log(moment().local(), "local date")






// console.log(dur.humanize());
// let m1= moment().add(1,"days");
// let m2= moment().add(4,"days")

// console.log(moment.duration(m2.diff(m1)).asDays());


  this._customservice.Exclusive.next(true)
}
btnInChild(){
  this.message="The button is already selected  by the user and will be removed "
}

print_current_page()
{
window.print();
}
addNewItem(inpVal:any){
  this.NewItem.emit(inpVal);
}
multiply(num1:any,num2:any){
  this.result= num1*num2;
  console.log(this.result)
}
divide(num1:any,num2:any){
  this.result= num1/num2;

}
capi(inputVal:any){
this.sentences = inputVal.charAt(0).toUpperCase();
console.log(this.sentences)

}


ngOnDestroy(): void {
    this._customservice.Exclusive.next(false)
}
}
