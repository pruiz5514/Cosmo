import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPreguntasService {

  private answeredQuestionsSubject = new BehaviorSubject<number>(0);
  answeredQuestions$ = this.answeredQuestionsSubject.asObservable();

  incrementAnsweredQuestions() {this.answeredQuestionsSubject.next(this.answeredQuestionsSubject.getValue() + 1); }

  constructor() { }
}
