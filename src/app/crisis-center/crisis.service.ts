import { Injectable } from '@angular/core';

import {delay, Observable, of} from 'rxjs';

import {CRISES} from './mock-crises';
import {MessageService} from "../message.service";
import {Crisis} from "./crisis";

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getCrises(): Observable<Crisis[]> {
    const crises = of(CRISES);
    this.messageService.add('CrisisService: fetched crises');
    return crises;
  }

  getCrisis(id: number): Observable<Crisis> {
    // For now, assume that a crisis with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const crisis = CRISES.find(h => h.id === id)!;
    this.messageService.add(`CrisisService: fetched crisis id=${id}`);
    return of(crisis);
  }
}
