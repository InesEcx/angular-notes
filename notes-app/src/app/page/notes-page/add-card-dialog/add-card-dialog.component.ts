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
    templateUrl: './add-card-dialog.component.html',
    styleUrls: ['./add-card-dialog.component.scss']
})
export class AddCardDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<AddCardDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { title: string; description: string }
    ) {
        if (!this.data) {
            this.data = {title: '', description: ''};
        }
    }
}
