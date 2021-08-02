import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center'
    })
  ] ,
  exports: [
    BsDropdownModule,
    ButtonsModule,
    ToastrModule
  ]
})
export class SharedModule { }
