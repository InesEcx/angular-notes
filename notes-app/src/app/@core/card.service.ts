import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {Card} from './card.model';
import {isPlatformBrowser} from "@angular/common";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: 'root'})
export class CardService {
    private cards: Card[] = [];
    private cardsSubject = new BehaviorSubject<Card[]>(this.cards);

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        this.cards = this.loadFromLocalStorage();
        this.cardsSubject.next(this.cards);
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

    private loadFromLocalStorage(): Card[] {
        if (!isPlatformBrowser(this.platformId)) {
            // Si le code n'est pas exécuté dans le navigateur, on retourne un tableau vide ou une valeur par défaut
            return [];
        }
        const cardsJson = localStorage.getItem('cards');
        return cardsJson ? JSON.parse(cardsJson) : [];
    }


    removeCard(id: number) {
        this.cards = this.cards.filter(c => c.id !== id);
        this.saveToLocalStorage();
    }
}
