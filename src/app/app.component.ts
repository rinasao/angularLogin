import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularTesting';
  empData;
  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {

  }
 
  // onSubmit(userlogin) {
  //   if (userlogin.value.username === 'rina' && userlogin.value.password === 'rina@123') {
  //     console.log(userlogin.value.username);
  //     const redirectUrl = '/register';
  //     let navigationExtras: NavigationExtras = {
  //       queryParamsHandling: 'preserve',
  //       preserveFragment: true
  //     };
  //     this.router.navigate([redirectUrl], navigationExtras);
  //   } else {
  //     alert("Username or Password is incorrect");
  //   }
  // }


}
