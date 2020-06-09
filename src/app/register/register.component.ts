import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() listEmployee = new EventEmitter();
  submitted = false;
  registrationForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
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
    console.log("registration page value is", registrationForm.value);
    this.listEmployee.emit(registrationForm.value);
    this.router.navigate(['/employeeList']);
    if (this.registrationForm.invalid) {
      return;
    }

  }


}
