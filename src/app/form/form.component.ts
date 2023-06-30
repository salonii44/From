import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomeService } from '../appService/custome.service';
import { Router, RouterModule, Route } from '@angular/router';
import { UserdataService } from '../appService/userdata.service';
import { datamodel } from './model';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // display=false;
  public mode = 'create';
  UserData!: FormGroup;

  data: undefined | datamodel[];


  constructor(private user: UserdataService, private formbuilder: FormBuilder, private router: Router, private http: HttpClient) { }
  ngOnInit(): void {
    this.UserData = this.formbuilder.group({
      username: new FormControl('', [Validators.required]),

      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),


    })
    this.getUsers();


  }


  OnSubmit(UserData: datamodel) {
    this.user.usersignup(this.UserData.value)

    console.log(this.UserData.value);
    this.getUsers();

  }


  getUsers() {
    this.user.getUser().subscribe((res => {
      this.data = res;
    }))
  }


  show(row: any) {



  }
  // EditUser(userid: any) {
  //   console.log(userid);

  // }
  ondelete(id: any): void {

    this.user.userDelete(id).subscribe((res) => {
      alert("users deleted")
      console.log(id);
      console.log(res);
      this.getUsers();

    })
  }

  update(id:any){
    this.router.navigate(['/update',id])

  }



  get username() {
    return this.UserData.get('username')
  }

  get email() {
    return this.UserData.get('email')
  }

  get password() {
    return this.UserData.get('password')
  }



}
