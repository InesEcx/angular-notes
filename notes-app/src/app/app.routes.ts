import {Routes} from '@angular/router';
import {LayoutComponent} from "./@shared/layout/layout.component";
import {NotesPageComponent} from "./page/notes-page/notes-page.component";
import {TagComponent} from "./page/tag/tag.component";

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: 'notes', component: NotesPageComponent},
            {path: 'tag', component: TagComponent},
            {path: '', redirectTo: 'notes', pathMatch: 'full'},
            {path: '**', redirectTo: 'notes'}
        ]
    }
];