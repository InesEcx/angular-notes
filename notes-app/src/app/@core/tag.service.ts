import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Tag} from "./tag.model";

@Injectable({
    providedIn: 'root'
})
export class TagService {
    private tags: Tag[] = [];
    private tagsSubject = new BehaviorSubject<Tag[]>(this.tags);

    constructor() {
    }

    /**
     * Retourne un Observable de la liste des tags
     */
    getTags(): Observable<Tag[]> {
        return this.tagsSubject.asObservable();
    }

    /**
     * Crée un nouveau tag avec un nom et une couleur
     * @param name Nom du tag
     * @param color Couleur du tag
     */
    createTag(name: string, color: string): Observable<Tag> {
        const newTag: Tag = {id: this.generateId(), name, color};
        this.tags.push(newTag);
        this.tagsSubject.next(this.tags);
        return of(newTag);
    }

    /**
     * Met à jour un tag existant
     * @param tag Le tag modifié
     */
    updateTag(tag: Tag): Observable<Tag> {
        const index: number = this.tags.findIndex(t => t.id === tag.id);
        if (index !== -1) {
            this.tags[index] = tag;
            this.tagsSubject.next(this.tags);
        }
        return of(tag);
    }

    /**
     * Supprime un tag en se basant sur son identifiant
     * @param tagId L'identifiant du tag à supprimer
     */
    deleteTag(tagId: string): Observable<boolean> {
        const index: number = this.tags.findIndex(t => t.id === tagId);
        if (index !== -1) {
            this.tags.splice(index, 1);
            this.tagsSubject.next(this.tags);
            return of(true);
        }
        return of(false);
    }

    /**
     * Méthode utilitaire pour générer un identifiant unique
     */
    private generateId(): string {
        return Math.random().toString(36).substr(2, 9);
    }
}
