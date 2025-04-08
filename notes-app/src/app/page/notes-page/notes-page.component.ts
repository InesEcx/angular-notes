import {Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardTitle} from "@angular/material/card";
import {Card} from "../../@core/card.model";
import {CardService} from "../../@core/card.service";
import {MatDialog} from "@angular/material/dialog";
import {MatFabButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {CommonModule, NgForOf} from "@angular/common";
import {AddCardDialogComponent} from '../add-card-dialog/add-card-dialog';

@Component({
    selector: 'app-notes-page',
    imports: [
        MatIcon,
        MatFabButton,
        MatCard,
        MatCardTitle,
        MatCardContent,
        MatCardFooter,
        NgForOf,
        CommonModule,
        MatIconButton
    ],
    templateUrl: './notes-page.component.html',
    standalone: true,
    styleUrl: './notes-page.component.scss'
})
export class NotesPageComponent {
    cards: Card[] = [];

    constructor(private cardService: CardService, private dialog: MatDialog) {
    }

    ngOnInit() {
        this.cards = this.cardService.getCards();
    }

    openAddCardDialog() {
        const dialogRef = this.dialog.open(AddCardDialogComponent, {
            width: '400px',
            data: {title: '', description: ''}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const newCard: Card = {
                    id: Date.now(),
                    title: result.title,
                    description: result.description,
                    date: new Date()
                };
                this.cardService.addCard(newCard);
                this.cards = this.cardService.getCards();
            }
        });
    }

    deleteCard(card: Card) {
        this.cardService.removeCard(card.id);
        this.cards = this.cardService.getCards();
    }
}
