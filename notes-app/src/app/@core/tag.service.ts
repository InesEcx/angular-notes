import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Tag} from "./tag.model";
import {isPlatformBrowser} from "@angular/common";

@Injectable({
    providedIn: 'root'
})
export class TagService {
    private tags: Tag[] = [];
    private tagsSubject = new BehaviorSubject<Tag[]>(this.tags);

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        this.tags = this.loadFromLocalStorage();
        this.tagsSubject.next(this.tags);
    }

    getTags(): Observable<Tag[]> {
        return this.tagsSubject.asObservable();
    }

    createTag(name: string, color: string): Observable<Tag> {
        const newTag: Tag = {id: this.generateId(), name, color};
        this.tags.push(newTag);
        this.tagsSubject.next(this.tags);
        this.saveToLocalStorage();
        return of(newTag);
    }

    updateTag(tag: Tag): Observable<Tag> {
        const index = this.tags.findIndex(t => t.id === tag.id);
        if (index !== -1) {
            this.tags[index] = tag;
            this.tagsSubject.next(this.tags);
            this.saveToLocalStorage();
        }
        return of(tag);
    }

    deleteTag(tagId: string): Observable<boolean> {
        const index = this.tags.findIndex(t => t.id === tagId);
        if (index !== -1) {
            this.tags.splice(index, 1);
            this.tagsSubject.next(this.tags);
            this.saveToLocalStorage();
            return of(true);
        }
        return of(false);
    }

    private saveToLocalStorage() {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('tags', JSON.stringify(this.tags));
        }
    }

    private loadFromLocalStorage(): Tag[] {
        if (!isPlatformBrowser(this.platformId)) {
            return [];
        }
        const tagsJson = localStorage.getItem('tags');
        return tagsJson ? JSON.parse(tagsJson) : [];
    }

    private generateId(): string {
        return Math.random().toString(36).substr(2, 9);
    }
}
