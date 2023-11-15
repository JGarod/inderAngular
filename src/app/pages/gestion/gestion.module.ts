import { NgModule } from '@angular/core';

import { GestionComponent } from './gestion.component';
import { CommonModule } from '@angular/common';
import { BreadcrumbsModule } from 'src/app/components/breadcrumbs/breadcrumbs.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        BreadcrumbsModule,
        RouterModule
    ],
    exports: [GestionComponent],
    declarations: [GestionComponent],
    providers: [],
})
export class GestionModule { }
