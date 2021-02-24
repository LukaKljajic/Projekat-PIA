import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  uri: string = 'http://localhost:4000'

  getAllNews() {
    return this.http.get(`${this.uri}/getAllNews`)
  }

  getNameForCategoryNumber(number: number) {
    const data = {
      number: number
    }

    return this.http.post(`${this.uri}/getNameForCategoryNumber`, data)
  }
}
