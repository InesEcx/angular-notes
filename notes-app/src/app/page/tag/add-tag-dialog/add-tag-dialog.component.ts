import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";

@Component({
    selector: 'app-add-tag-dialog',
    imports: [
        MatFormField,
        MatLabel,
        MatInput,
        FormsModule,
        MatButton,
        MatDialogClose
    ],
    templateUrl: './add-tag-dialog.component.html',
    standalone: true,
    styleUrl: './add-tag-dialog.component.scss'
})
export class AddTagDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<AddTagDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { name: string; color: string }
    ) {
        if (!this.data) {
            this.data = {name: '', color: '#000000'};
        }
    }
}