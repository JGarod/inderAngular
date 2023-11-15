import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { PQRComponent } from './pages/pqr/pqr.component';
import { PQRModule } from './pages/pqr/pqr.module';
import { IntersantanderComponent } from './pages/intersantander/intersantander.component';
import { TransparenciaComponent } from './pages/transparencia/transparencia.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ProcesosMisionalesComponent } from './pages/procesos-misionales/procesos-misionales.component';
import { FinancieraComponent } from './pages/financiera/financiera.component';
import { TramitesComponent } from './pages/tramites/tramites.component';
import { TramitesModule } from './pages/tramites/tramites.module';
import { DenunciaComponent } from './pages/denuncia/denuncia.component';
import { DenunciaModule } from './pages/denuncia/denuncia.module';
import { ConsultarEstadoModule } from './pages/consultar-estado/consultar-estado.module';
import { ConsultarEstadoComponent } from './pages/consultar-estado/consultar-estado.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'pqr',
    component: PQRComponent
  },
  {
    path: 'intersantander',
    component: IntersantanderComponent
  }, {
    path: 'transparencia',
    component: TransparenciaComponent
  },
  {
    path: 'gestion',
    component: GestionComponent
  },
  {
    path: 'procesos-misionales',
    component: ProcesosMisionalesComponent
  },
  {
    path: 'financiera',
    component: FinancieraComponent
  },
  {
    path: 'tramites',
    component: TramitesComponent
  },
  {
    path: 'denuncia',
    component: DenunciaComponent
  },
  {
    path: 'consultar',
    component: ConsultarEstadoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PQRModule,
    DenunciaModule,
    ConsultarEstadoModule,
    TramitesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
