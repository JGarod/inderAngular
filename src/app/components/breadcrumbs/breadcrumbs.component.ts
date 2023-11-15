import { Component, Input } from '@angular/core';

export interface Link{
  name: string;
  route?: string;
}

@Component({
  selector: 'vex-breadcrumbs',
  templateUrl: 'breadcrumbs.component.html',
  styleUrls: ['breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {

  @Input() crumbs: Link[] = [];

}
