import {Component, Inject} from '@angular/core';
import {
    MatDialogRef,
    MAT_DIALOG_DATA,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions, MatDialogClose
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-add-card-dialog',
    standalone: true,
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatDialogActions,
        MatDialogClose,
        MatButton
    ],
    template: `
        <h1 mat-dialog-title>Nouvelle carte</h1>
        <div mat-dialog-content>
            <mat-form-field appearance="fill">
                <mat-label>Titre</mat-label>
                <input matInput [(ngModel)]="data.title"/>
            </mat-form-field>

            <mat-form-field appearance="fill">
                <mat-label>Description</mat-label>
                <textarea matInput rows="3" [(ngModel)]="data.description"></textarea>
            </mat-form-field>
        </div>

        <div mat-dialog-actions align="end">
            <button mat-button mat-dialog-close>Annuler</button>
            <button mat-button [mat-dialog-close]="data" color="primary">Enregistrer</button>
        </div>
    `
})
export class AddCardDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<AddCardDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { title: string; description: string }
    ) {
    }
}
