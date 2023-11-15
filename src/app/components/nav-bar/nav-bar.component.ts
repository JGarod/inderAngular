import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'nav-bar',
    styleUrls: ['nav-bar.component.sass'],
    templateUrl: 'nav-bar.component.html'
})
export class NavBarComponent {
    @Input() responsive!: boolean
    html = `<span class="btn btn-danger">Never trust not sanitized HTML!!!</span>`;
    open = false
    language = 'ES'
    param = { value: 'world' }
    translate: TranslateService;
    currentOption = 0;

    constructor(translate: TranslateService) {
        this.translate = translate
    }

    changeOpen() {
        this.open = !this.open
    }

    changeLanguage(language: string) {
        this.translate.use(language=='ES'?'es':'en')
        this.language = language
    }
}