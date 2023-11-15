import { NgModule } from '@angular/core';
import { TramitesComponent } from './tramites.component';
import { CommonModule } from '@angular/common';
import { BreadcrumbsModule } from 'src/app/components/breadcrumbs/breadcrumbs.module';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        BreadcrumbsModule,
        RouterModule,
        MatIconModule
    ],
    exports: [],
    declarations: [TramitesComponent],
    providers: [],
})
export class TramitesModule { }
