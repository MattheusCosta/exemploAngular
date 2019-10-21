import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtrairComponent } from './components/subtrair/subtrair.component';
import { SubtrairService } from './services';



@NgModule({
  declarations: [SubtrairComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SubtrairComponent
  ],
  providers: [
    SubtrairService
  ]
})
export class SubtrairModule { }
