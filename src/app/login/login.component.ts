
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    styleUrls: ['./login.component.scss'],
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get f() { return this.loginForm.controls; }

    onSubmit(loginForm) {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        if(loginForm.value.username == 'rina' && loginForm.value.password == 'rina@123'){
            this.router.navigate(['/register']);
        }else{
            alert("Username or password is incorrect");
        }
        this.loading = true;
    }
}

