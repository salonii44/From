import { AfterContentInit, AfterViewInit,EventEmitter, Component, DoCheck, Input,OnChanges,OnInit, Output, SimpleChanges, VERSION } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { CustomeService } from '../appService/custome.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  valu=''
  text=''
  data='';
  filterBy=''
  childsData='Send a data child to parent component '
  // @Input() Ename:string=''
  @Input() name:string=''
  @Output() childData:EventEmitter<string>=new EventEmitter()

  users:any;

//   constructor(private customeservice:CustomeService)
//   {
//     customeservice.users().subscribe((data)=>{
//     this.users=data;
//     console.warn('data', this.data)

//   });
// }
// constructor( private CustomeService:CustomeService){
  // CustomeService.users().subscribe((data)=>{
    // this.users=data;
    // console.warn('data', this.data);

  // })
// }

  ngOnInit(): void {

  }


  getUserFormData(data:any){
    console.warn(data);
  }



  // getUserFormData(data:any){

  //     console.warn(data);
  //     this.customeservice.saveUsers(data).subscribe((result)=>{
  //         console.warn(result);
  //       });

  //     }

        added(serch:any){

          console.log(serch)
          console.log();

        //  this.text=InpVal.text;

        }


  // ngOnChanges(changes: SimpleChanges): void {
  //     console.log('onchanges', changes)
  //     alert('changes')
  // }
  // cliked(){
  //   alert('')
  // }
// ngDoCheck(): void {
//    alert('dochecks')
// }

// ngAfterViewInit(): void {
//     alert('ngAfterViewInit')
// }
// ngAfterContentInit(): void {
//     alert('ngAfterContentInit')
// }

sendedData(){

  this.childData.emit(this.childsData)
}

  }

