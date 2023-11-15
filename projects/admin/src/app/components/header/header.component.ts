import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { IResponse } from '../../models/iresponse';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // GetUser() {
  //   this.userService.GetUser().subscribe({
  //     next: (v) => {
  //       let response = v as IResponse;
  //       this.user = response.data as IUser;
  //     },
  //     // error: (e) => {},
  //     // complete: () => console.log('complete'),
  //   });
  // }

  LogOut() {
    this.router.navigate(['/login']);
    localStorage.removeItem('token');
  }

  get isUserLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
