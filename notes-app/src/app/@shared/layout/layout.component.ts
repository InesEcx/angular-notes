import {Component} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
    selector: 'app-layout',
    imports: [
        MatSidenavContainer,
        MatSidenavContent,
        MatNavList,
        MatSidenav,
        MatIcon,
        MatListItem,
        RouterLink,
        RouterLinkActive,
        MatIconButton,
        MatToolbar,
        RouterOutlet
    ],
    templateUrl: './layout.component.html',
    standalone: true,
    styleUrl: './layout.component.scss'
})
export class LayoutComponent {
}
