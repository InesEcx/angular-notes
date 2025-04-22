import {Component} from '@angular/core';
import {Tag} from "../../@core/tag.model";
import {TagService} from "../../@core/tag.service";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {AddTagDialogComponent} from "./add-tag-dialog/add-tag-dialog.component";

@Component({
    selector: 'app-tag',
    imports: [
        MatCard,
        FormsModule,
        NgForOf,
        MatCardTitle,
        MatCardContent,
        MatIcon,
        MatIconButton,
        MatButton
    ],
    templateUrl: './tag.component.html',
    standalone: true,
    styleUrl: './tag.component.scss'
})
export class TagComponent {
    tags: Tag[] = [];

    constructor(private tagService: TagService, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.tagService.getTags().subscribe((tags: Tag[]) => {
            this.tags = tags;
        });
    }

    openAddTagDialog(): void {
        const dialogRef = this.dialog.open(AddTagDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.tagService.createTag(result.name, result.color).subscribe();
            }
        });
    }

    deleteTag(tag: Tag): void {
        this.tagService.deleteTag(tag.id).subscribe();
    }

    getTextColor(hex: string): string {
        if (!hex) {
            return '#000';
        }
        if (hex.startsWith('#')) {
            hex = hex.slice(1);
        }
        if (hex.length === 3) {
            hex = hex.split('').map(c => c + c).join('');
        }

        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 186 ? '#000000' : '#FFFFFF';
    }

    openEditTagDialog(tag: Tag): void {
        const dialogRef = this.dialog.open(AddTagDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const updatedTag: Tag = {...tag, name: result.name, color: result.color};
                this.tagService.updateTag(updatedTag).subscribe();
            }
        });
    }
}
