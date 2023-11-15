import { Component } from '@angular/core'

interface Solicitud {
    tipoSolicitud?: 'peticion' | 'queja' | 'solicitud' | 'sugerencia';
    quejaAnonima?: boolean;
    tipoSolicitante?: 'apoderado' | 'infante' | 'juridica' | 'natural';
    razonSocial?: string;
    nombre?: string;
    apellidos?: string;
    correo?: string;
    telefono?: string;
    tipoDocumento?: 'cedula' | 'NUIP' | 'cedulaExtranjera' | 'NIT' | 'pasaporte';
    documento?: number;
    cargo?: string;
    direccion?: string
    barrio?: string
    municipio?: string
    pais?: string
    medioRespuesta?: 'correo' | 'direccion'
    comentarios?: string
}

@Component({
    styleUrls: ['./pqr.component.scss'],
    templateUrl: './pqr.component.html',
    selector: 'PQR'
})
export class PQRComponent{

    constructor(){}
}