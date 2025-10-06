import { Component } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormArray, FormControl, FormBuilder, Validators, FormControlName  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../../core/models/User-form';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
  providers:[UserService]
})
export class UserFormComponent {
  userForm!:FormGroup;
  userFormInvalid:any = false;
  usersData:User[] = [];
  submitted = false;
  constructor(private userService:UserService, private fb:FormBuilder) {}

  ngOnInit() {
    this._initializeForm();
  }

  onChangeDesignation(designationValue:Event) {
    const designation = (designationValue.target as HTMLSelectElement).value;
    if(designation) {
      console.log("designation value",designation);
    }
  }

  _initializeForm() {
    this.userForm = this.fb.group({
      firstname:['', [Validators.required]],
      lastname:['', [Validators.required]],
      email:['', [Validators.required]],
      designation: ['', [Validators.required]],
      skills: this.fb.array([this.skillCreatorFn()])
    })
  }

  skillCreatorFn() {
    return this.fb.group({
      skill:['', [Validators.required]]
    })
  }

  get skillsSets(): FormArray {
    return this.userForm.get('skills') as FormArray;
  }
  addSkills() {
    this.skillsSets.push(this.skillCreatorFn());
  }

  remove(index: number) {
    this.skillsSets.removeAt(index);
  }

  OnSubmitUserForm() : any {
     this.submitted = true;
    if(this.userForm.invalid) {
      this.userFormInvalid  = true; 
      return false;    
    } else {
      const user = this.userForm.value as User;
      this.usersData.push(user);
      localStorage.setItem('users', JSON.stringify(this.usersData));
      this.userFormInvalid  = false;
    }
  }
}
