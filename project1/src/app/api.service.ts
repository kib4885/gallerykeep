import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getJobs(){
    return this.httpClient.get(`https://testapi.io/api/crimsonsunset/code-challenge-jobs`);
  }
}
