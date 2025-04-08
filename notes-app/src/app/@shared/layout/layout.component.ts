import {Component} from '@angular/core';
import {MatSidenavContainer, MatSidenavContent, MatSidenav} from '@angular/material/sidenav';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {SideNavComponent} from "./side-nav/side-nav.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    imports: [
        MatSidenavContainer,
        MatSidenavContent,
        MatSidenav,
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        SideNavComponent
    ]
})
export class LayoutComponent {
}
