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
        // On s'abonne au BehaviorSubject du TagService
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
}
