import { NgModule } from '@angular/core';

import { ProcesosMisionalesComponent } from './procesos-misionales.component';
import { CommonModule } from '@angular/common';
import { BreadcrumbsModule } from 'src/app/components/breadcrumbs/breadcrumbs.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        BreadcrumbsModule,
        RouterModule
    ],
    exports: [ProcesosMisionalesComponent],
    declarations: [ProcesosMisionalesComponent],
    providers: [],
})
export class ProcesosMisionalesModule { }
