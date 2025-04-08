import {Component} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-sidenav-menu',
    standalone: true,
    imports: [
        MatListModule,
        MatIconModule,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
}