import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  empData;
  submitted = false;
  registrationForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public registerService: RegisterService
  ) { }
  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      state: ['', Validators.required],
      pin: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['',
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10),
      ],
    });
  }

  get f() { return this.registrationForm.controls; }
  onRegister(registrationForm) {
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
    console.log("registration page value is", registrationForm.value);
    this.registerService.setData('registerData', registrationForm.value);
    this.router.navigate(['/employeeList']);
    if (this.registrationForm.invalid) {
      return;
    }

  }


}
