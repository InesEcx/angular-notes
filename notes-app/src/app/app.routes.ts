import { Routes } from '@angular/router';
import {LayoutComponent} from "./@shared/layout/layout.component";
import {NotesPageComponent} from "./page/notes-page/notes-page.component";
import {TagsPageComponent} from "./page/tags-page/tags-page.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'notes', component: NotesPageComponent },
      { path: 'tags', component: TagsPageComponent },
      { path: '', redirectTo: 'notes', pathMatch: 'full' },
      { path: '**', redirectTo: 'notes' }
    ]
  }
];