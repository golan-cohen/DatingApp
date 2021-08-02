import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  currectUser: any = {};


  constructor(
    public accountService: AccountService,
    private router: Router,
    private toaster: ToastrService) { }

  ngOnInit(): void {
    this.getUser();
  }

  login() {
    console.log(this.model);
    this.accountService.login(this.model)
    .subscribe(response =>
      {
        this.router.navigateByUrl('/members');
      }, error =>
      {
        console.log(error);
        if(!this.model.username)
        this.toaster.error(error.error.errors.Username);
        else if(!this.model.password)
        this.toaster.error(error.error.errors.Password);
        else
        this.toaster.error(error.error);
      });
  }

  logout()  {
    this.accountService.logout();
    this.model = {};
    this.router.navigateByUrl('/');
  }

  getUser() {
    this.currectUser = JSON.parse(localStorage.getItem('user') as string);
  }

}
