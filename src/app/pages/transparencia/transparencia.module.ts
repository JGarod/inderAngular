import { NgModule } from '@angular/core';

import { TransparenciaComponent } from './transparencia.component';
import { CommonModule } from '@angular/common';
import { BreadcrumbsModule } from 'src/app/components/breadcrumbs/breadcrumbs.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        BreadcrumbsModule,
        RouterModule
    ],
    exports: [TransparenciaComponent],
    declarations: [TransparenciaComponent],
    providers: [],
})
export class TransparenciaModule { }
