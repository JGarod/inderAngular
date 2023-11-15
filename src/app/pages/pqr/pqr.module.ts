import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PQRComponent } from './pqr.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    PQRComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
  ],
  exports: [PQRComponent],
  providers: [],
  bootstrap: []
})
export class PQRModule { }
