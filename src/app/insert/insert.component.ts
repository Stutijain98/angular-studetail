import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';
import {Student} from '../student';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})


export class InsertComponent implements OnInit {
studentForm:FormGroup;
isSubmitted=false;

  constructor( 
    private http: HttpClient,
    private formBuilder:FormBuilder,
    private route:Router,
  ) { }

  ngOnInit() {
    this.studentForm= this.formBuilder.group({
    //  Id:['',Validators.required],
      Name:[" ",Validators.required],
      Mobile:[" ",Validators.required],
      Email:[" ",Validators.required],
      Course:[" ",Validators.required],
      Fees:[" ",Validators.required]
    });
  }
get FormControls(){
   return this.studentForm.controls;
}
submit(){
  console.log(this.studentForm.value);
   if(this.studentForm.value.Name==" "){
       this.ErrName={'border-color':'red'}
      //this.ErrName={'message.alert':'Name is required'}
     }
     if(this.studentForm.value.Mobile==" "){
       this.ErrMobile={'border-color':'red'}
     }
     if(this.studentForm.value.Email==" "){
       this.ErrEmail={'border-color':'red'}
     }
     if(this.studentForm.value.Course==" "){
       this.ErrCourse={'border-color':'red'}
     }
     
      var formData: any = new FormData();
  formData.append("Name", this.studentForm.get('Name').value);
  formData.append("avatar", this.studentForm.get('avatar').value);

  this.http.post('http://localhost:4000/api/insert-student', formData).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )
  this.isSubmitted=true;
}
}