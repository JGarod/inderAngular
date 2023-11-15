import { NgModule } from '@angular/core';

import { ConsultarEstadoComponent } from './consultar-estado.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatInputModule,
        MatFormFieldModule
    ],
    exports: [ConsultarEstadoComponent],
    declarations: [ConsultarEstadoComponent],
    providers: [],
})
export class ConsultarEstadoModule { }

