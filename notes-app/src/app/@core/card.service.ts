import {Injectable} from '@angular/core';
import {Card} from './card.model';

@Injectable({providedIn: 'root'})
export class CardService {
    private cards: Card[] = [];

    constructor() {
        this.loadFromLocalStorage();
    }

    getCards(): Card[] {
        return this.cards;
    }

    addCard(card: Card) {
        this.cards.push(card);
        this.saveToLocalStorage();
    }

    private saveToLocalStorage() {
        localStorage.setItem('cards', JSON.stringify(this.cards));
    }

    private loadFromLocalStorage() {
        const data = localStorage.getItem('cards');
        if (data) {
            this.cards = JSON.parse(data);
        }
    }

    removeCard(id: number) {
        this.cards = this.cards.filter(c => c.id !== id);
        this.saveToLocalStorage();
    }
}
