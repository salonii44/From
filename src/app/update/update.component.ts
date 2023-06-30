import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { CustomeService } from '../appService/custome.service';
import { UserdataService } from '../appService/userdata.service';
import { datamodel } from '../form/model';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
public dataid !: number;
public user !:datamodel
  constructor(private active:ActivatedRoute, private router:Router, private userdata:UserdataService ) {  }


  ngOnInit(): void {
      this.active.paramMap.subscribe((param:Params)=>{
        this.dataid-param['get']('id')
// console.log("dataides",this.dataid );
// console.log(this.dataid);

      })
      // this.userdata.fetchdata(this.dataid).subscribe((data:datamodel)=>{
      //   this.user=data;
      // })



  }

  update(){
    this.userdata.updateuser(this.user,this.dataid).subscribe((res:datamodel)=>{
      this.router.navigate(["/"])
    })
  }
}
