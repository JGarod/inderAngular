import { NgModule } from '@angular/core';

import { IntersantanderComponent } from './intersantander.component';
import { CommonModule } from '@angular/common';
import { BreadcrumbsModule } from 'src/app/components/breadcrumbs/breadcrumbs.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        BreadcrumbsModule,
        RouterModule
    ],
    exports: [IntersantanderComponent],
    declarations: [IntersantanderComponent],
    providers: [],
})
export class IntersantanderModule { }
