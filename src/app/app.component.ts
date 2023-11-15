import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'already_done_components';
  responsive: boolean;
  constructor(translate: TranslateService, private porstService: PostsService) {
    translate.setDefaultLang('en');
    translate.use('es');

    window.onscroll = this.onScroll;
    window.onresize = this.onResize.bind(this);
    this.responsive = (window.screen.width < 1300) ? true : false;
  }

  ngOnInit(): void {
    this.porstService.fetchPosts()
  }

  onResize() {

    if (window.screen.width < 1300) {
      this.responsive = true;
      const space = document.getElementById('space')
      if (space) {
        space.style.display = 'none'
      }
    } else {
      this.responsive = false
      const space = document.getElementById('space')
      if (space) {
        space.style.display = 'block'
      }
    }
  }

  onScroll() {
    const banner = document.getElementById('banner');
    if (banner) {
      const gov = document.getElementById('gov-co');
      const menu = document.getElementById('menu');
      const actions = document.getElementById('actions');
      if (document.documentElement.scrollTop > banner.offsetHeight) {
        if (gov && banner && menu && actions) {
          banner.style.height = '0px';
          // actions.style.display = 'none'
        }
      } else {
        if (gov && banner && menu && actions) {
          banner.style.height = '15vh';
          // actions.style.display = 'block'
        }
      }
    }
  }
}
