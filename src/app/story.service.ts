import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  type: string[] = [
    'top', 'new', 'ask', 'show', 'job'
  ];

  constructor(private http: HttpClient) { }

  getStoriesByType(type: string) {
    const $apiUrl = `https://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`;
    this.http.get($apiUrl);
  }
}
