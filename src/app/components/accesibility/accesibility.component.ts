import { Component } from "@angular/core";
import { AccesibilityService } from "./accesibility.service";

@Component({
    selector: 'accesibility',
    styleUrls: ['accesibility.component.sass'],
    templateUrl: 'accesibility.component.html'
})
export class AccesibilityComponent {
    size = 1;

    constructor(private acessibilityService: AccesibilityService) { }

    increaseSize() {
        const root = document.getElementById('root')
        if (root && this.size < 1.4) {
            this.size = this.size + 0.1;
            root.style.fontSize = this.size + 'vw'
        }
    }

    decreaseSize() {
        const root = document.getElementById('root')
        if (root && this.size > 0.6) {
            this.size = this.size - 0.1;
            root.style.fontSize = this.size + 'vw'
        }
    }
}