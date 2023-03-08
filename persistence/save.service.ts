import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SaveService {
  constructor(private http: HttpClient, private router: Router) {}

  save() {
    this.http.post('api/save/sheet', {});
  }
}
