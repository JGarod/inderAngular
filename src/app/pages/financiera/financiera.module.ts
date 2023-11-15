import { NgModule } from '@angular/core';

import { FinancieraComponent } from './financiera.component';
import { CommonModule } from '@angular/common';
import { BreadcrumbsModule } from 'src/app/components/breadcrumbs/breadcrumbs.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        BreadcrumbsModule,
        RouterModule
    ],
    exports: [FinancieraComponent],
    declarations: [FinancieraComponent],
    providers: [],
})
export class FinancieraModule { }
