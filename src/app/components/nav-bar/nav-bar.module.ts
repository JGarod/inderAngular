import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { HttpLoaderFactory } from 'src/app/app.module';
import { ResponsiveNavBarComponent } from '../responsive-nav-bar/responsive-nav-bar.component';
import { NavBarComponent } from './nav-bar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  declarations: [
    NavBarComponent, ResponsiveNavBarComponent
  ],
  imports: [
    CommonModule,
    PopoverModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    RouterModule,
    MatTreeModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    NavBarComponent
  ],
  providers: [],
  bootstrap: []
})
export class NavBarModule { }