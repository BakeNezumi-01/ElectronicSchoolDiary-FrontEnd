import { HttpClient } from '@angular/common/http';

export class ApiClass {

  constructor(private httpClient: HttpClient) {
    // use it like this in other services / components etc.
/*
    this.getDataFromServer().
    then(res => {
      console.log('res: ', res);
    });
  }

  getDataFromServer() {
    const params = {
      param1: "value1",
      param2: "value2"
    };
    const url = 'https://api.example.com/list';
    return this.httpClient.get(url, { params }).toPromise();
*/
  }
}
