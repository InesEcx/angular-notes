import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LayoutComponent} from "./@shared/layout/layout.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, LayoutComponent],
    templateUrl: './app.component.html',
    standalone: true,
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'notes-app';
}
