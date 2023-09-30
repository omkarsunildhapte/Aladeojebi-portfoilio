import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderServiesService {
  private loaderSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  showLoader() {
    this.loaderSubject.next(true);
  }

  hideLoader() {
    this.loaderSubject.next(false);
  }

  getLoaderState() {
    return this.loaderSubject.asObservable();
  }
}
