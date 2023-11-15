import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccesibilityComponent } from './components/accesibility/accesibility.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FooterComponent } from './components/footer/footer.component';
import { MatMenuModule } from '@angular/material/menu'
import { MatTreeModule } from '@angular/material/tree'
import { MatPaginatorModule } from '@angular/material/paginator'
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgxTweetModule } from "ngx-tweet";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbsModule } from './components/breadcrumbs/breadcrumbs.module';
import { AlertModule } from 'ngx-alerts';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { IntersantanderModule } from './pages/intersantander/intersantander.module';
import { ProcesosMisionalesModule } from './pages/procesos-misionales/procesos-misionales.module';
import { TransparenciaModule } from './pages/transparencia/transparencia.module';
import { GestionModule } from './pages/gestion/gestion.module';
import { FinancieraModule } from './pages/financiera/financiera.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent, LandingComponent, AccesibilityComponent, FooterComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbsModule,
    NgxTweetModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavBarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTreeModule,
    IntersantanderModule,
    ProcesosMisionalesModule,
    TransparenciaModule,
    GestionModule,
    FinancieraModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
