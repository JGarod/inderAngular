import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { ImagenesInder } from "src/app/interfaces/imagenesInder.interface";
import { PostsService } from "src/app/services/posts.service";

@Component({
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.sass'],
    selector: 'landing'
})
export class LandingComponent implements OnInit {
    title = 'ng-carousel-demo';
    public infoGeneral: any = [];
    public imgInfo: ImagenesInder[] = [];
    public PostInfo: ImagenesInder[] = [];
    public images: { title: string; short: string; src: string }[] = [];

    constructor(config: NgbCarouselConfig,
        public postservice: PostsService,
    ) {
        config.interval = 2000;
        config.keyboard = true;
        config.pauseOnHover = true;
    }

    ngOnInit() {
        this.solicitarAfiliacion()
        this.infoPrincipal();
        if (window.screen.width < 1300) {
            const space = document.getElementById('space')
            if (space) {
                space.style.display = 'none'
            }
        }
    }

    solicitarAfiliacion() {
        try {
            this.postservice.BuscarFinanciera()
                .subscribe(
                    {
                        next: resp => {
                            let numero = 1;
                            resp.forEach(element => {
                                let imagenes = {
                                    title: `${numero} Slide`,
                                    short: `${numero} Slide Short`,
                                    src: element.source_url,
                                }
                                this.images.push(imagenes)
                            });
                            // this.pruebahtml = data.excerpt.rendered
                        },
                        error: (err) => {
                            console.log(err)
                        }
                    });
        } catch (error) {
            console.log(error)
        }
    }

    async infoPrincipal() {
        try {
            this.postservice.imagenesPrincipalLanding()
                .subscribe(
                    {
                        next: async resp => {

                            this.imgInfo = resp;
                            this.postservice.infoPrincipalLanding()
                                .subscribe(
                                    {
                                        next: async resp => {
                                            // console.log(resp)
                                            this.PostInfo = resp
                                            if (this.PostInfo.length > 0) {
                                                await Promise.all(this.PostInfo.map(async (value) => {
                                                    let busqueda = this.imgInfo.findIndex(element => element.title.rendered === value.title.rendered);
                                                    if (busqueda !== -1) {
                                                        let armado = {
                                                            img: this.imgInfo[busqueda],
                                                            info: value
                                                        }
                                                        this.infoGeneral.push(armado)
                                                    }
                                                }));
                                            }

                                        },
                                        error: (err) => {
                                            console.log(err)
                                        }
                                    });

                        },
                        error: (err) => {
                            console.log(err)
                        }
                    });

        } catch (error) {
            console.log(error)
        }
    }

}