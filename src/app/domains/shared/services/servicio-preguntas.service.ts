import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPreguntasService {

  private answeredQuestionsSubject = new BehaviorSubject<number>(0);
  answeredQuestions$ = this.answeredQuestionsSubject.asObservable();
  private readonly STORAGE_KEY = 'answered_questions';

  incrementAnsweredQuestions() {
    const currentValue = this.answeredQuestionsSubject.getValue();
  
    this.answeredQuestionsSubject.next(currentValue + 1); 
  
    localStorage.setItem(this.STORAGE_KEY, String(currentValue + 1)); 
  }

  constructor() {

    const savedCount = localStorage.getItem(this.STORAGE_KEY);
    if (savedCount !== null) {
      this.answeredQuestionsSubject.next(+savedCount);
    }

  }

}