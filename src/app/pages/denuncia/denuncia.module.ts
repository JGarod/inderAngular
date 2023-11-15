import { NgModule } from '@angular/core';

import { DenunciaComponent } from './denuncia.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule
    ],
    exports: [DenunciaComponent],
    declarations: [DenunciaComponent],
    providers: [],
})
export class DenunciaModule { }
