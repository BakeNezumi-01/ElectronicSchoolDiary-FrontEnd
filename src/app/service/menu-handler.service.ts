import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuHandlerService {

  constructor(private httpClient: HttpClient) {
    this.fillContent('Main');
  }

  // tslint:disable-next-line:typedef
  fillContent(category: string){
    console.log(category);
    this.getDataFromServer(category).
    then(res => {
    console.log('res: ', res);
    });
  }

  // tslint:disable-next-line:typedef
  getDataFromServer(category: string) {
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    const url = 'https://localhost:8080/api/v1/lessons';
    // @ts-ignore
    return this.httpClient.get(url, headers).toPromise();
  }
}
