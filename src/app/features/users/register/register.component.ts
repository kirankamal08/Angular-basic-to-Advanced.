import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormBuilder, FormControl,FormArray, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms'

// ✅ Must be outside the class
export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (password && confirmPassword && password !== confirmPassword) {
    return { passwordMismatch: true };
  }
  return null;
};

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  formRegister!:FormGroup;
  RegisterformStatus:boolean = false;
  constructor(private fb:FormBuilder) {}

  ngOnInit() {
    this.formRegister = this.fb.group({
      fullName:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]],
      phoneNumbers:this.fb.array([this.fb.control('',Validators.required)])
    }, { validators: passwordMatchValidator })
  }

  onSubmit() {
     if (this.formRegister.valid) {
      alert("Registeration successfull");
    } else {
      console.log('Form is invalid');
      this.formRegister.markAllAsTouched(); // Highlight errors
    }
  }

  // Getter for easy access in template
    get phoneNumbers(): FormArray {
      return this.formRegister.get('phoneNumbers') as FormArray;
    }

    // Add a new phone number
    addPhoneNumber() {
      this.phoneNumbers.push(this.fb.control('', Validators.required));
    }

    // Remove a phone number by index
    removePhoneNumber(index: number) {
      this.phoneNumbers.removeAt(index);
    }


}
