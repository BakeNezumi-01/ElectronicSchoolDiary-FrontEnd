import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {Lesson} from '../model/Lesson';
import {Data} from '../Data/Data';

@Injectable({
  providedIn: 'root'
})
export class MenuHandlerService {
  content = new BehaviorSubject<object[]>(Data.mainText);
  category = new BehaviorSubject<string>(Data.category);

  constructor(private httpClient: HttpClient) {
    this.fillContent(this.category.value);
  }

  // tslint:disable-next-line:typedef
  fillContent(category: string){
    console.log(category);
    this.category.next(category);
    this.getDataFromServer(category).
    then(res => {
      console.log('result: ', res);
      this.content.next(res as object[]);
    });
  }

  // tslint:disable-next-line:typedef
  getDataFromServer(category: string) { // todo add variability use category
    const params = {
    };
    const url = 'http://localhost:8080/api/v1/lessons';
    return this.httpClient.get(url, params).toPromise();
  }
}
