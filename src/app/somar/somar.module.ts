import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomarComponent } from './components/somar/somar.component';
import { SomarService } from './services/somar.service';



@NgModule({
  declarations: [SomarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SomarComponent
  ],
  providers: [
    SomarService
  ]
})

export class SomarModule { }
