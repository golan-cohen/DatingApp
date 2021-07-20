import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
//ng serve
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'the dating app';
  users: any;

  constructor(private accuntService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser()  {
      const user: User = JSON.parse(localStorage.getItem('user') as string);
      console.log(user);
      this.accuntService.setCurrentUser(user);
  }


}

