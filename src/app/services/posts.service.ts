import { Injectable } from "@angular/core";
import { map, Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { ImagenesInder } from "../interfaces/imagenesInder.interface";

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    private posts = new Subject();

    constructor(private http: HttpClient) { }

    fetchPosts() {
        this.http.get("https://indersantander.holatienda.com/index.php/wp-json/wp/v2/pages").subscribe(response =>
            this.posts.next(response)
        )
    }

    getPosts() {
        return this.posts.asObservable()
    }

    BuscarFinanciera() {
        return this.http.get<ImagenesInder[]>(`https://indersantander.holatienda.com//wp-json/wp/v2/media?search=slide`)
            .pipe(
                map(resp => {
                    return resp
                })
            );
    }
    imagenesPrincipalLanding() {
        return this.http.get<ImagenesInder[]>(`https://indersantander.holatienda.com//wp-json/wp/v2/media?search=post`)
            .pipe(
                map(resp => {
                    return resp
                })
            );
    }
    infoPrincipalLanding() {
        return this.http.get<ImagenesInder[]>(`https://indersantander.holatienda.com/wp-json/wp/v2/posts`)
            .pipe(
                map(resp => {
                    return resp
                })
            );
    }
}