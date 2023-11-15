import { Component, Input, OnInit } from "@angular/core";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { NestedTreeControl } from "@angular/cdk/tree";

interface node {
    name: string
    path?: string
    children?: node[]
}

const TREE_DATA: node[] = [
    {
        name: 'menu.item1',
        children: [
            {
                name: 'sub menu 1',
            },
            {
                name: 'sub menu 2',
            },
            {
                name: 'sub menu 3',
            }
        ]
    },
    {
        name: 'menu.item2',
        children: [
            {
                name: 'something',
            }
        ]
    },
    {
        name: 'menu.item3',
        children: [
            {
                name: 'something',
            }
        ]
    },
    {
        name: 'menu.item4',
        children: [
            {
                name: 'something',
            }
        ]
    },
    {
        name: 'menu.item5',
        children: [
            {
                name: 'something',
            }
        ]
    },
    {
        name: 'menu.item6',
        children: [
            {
                name: 'something',
            }
        ]
    },
]

@Component({
    selector: 'responsive-nav-bar',
    styleUrls: ['responsive-nav-bar.component.sass'],
    templateUrl: 'responsive-nav-bar.component.html'
})
export class ResponsiveNavBarComponent implements OnInit {
    @Input() open!: boolean
    @Input() changeOpen!: () => void
    dataSource = new MatTreeNestedDataSource<node>();
    treeControl = new NestedTreeControl<node>(node => node.children)

    ngOnInit(): void {
        this.dataSource.data = TREE_DATA;
    }

    hasChild = (_: number, node: node) => !!node.children && node.children.length > 0;
}