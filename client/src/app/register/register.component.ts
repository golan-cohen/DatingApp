import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private accountService: AccountService, private toaster: ToastrService) { }

  ngOnInit(): void {
  }

  register()  {
    this.accountService.register(this.model).subscribe(
      response => {
        console.log(response);
        this.cencel();
      }, error => {
        console.log(error);
        if(!this.model.username)
        this.toaster.error(error.error.errors.Username);
        else if(!this.model.password)
        this.toaster.error(error.error.errors.Password);
        else
        this.toaster.error(error.error);
      }
    )
  }

  cencel()  {
    this.cancelRegister.emit(false);
  }

}
