import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tramites',
    templateUrl: 'tramites.component.html',
    styleUrls: ['tramites.component.scss']
})

export class TramitesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    travel(url: string){
        window.location.replace(url)
    }
}