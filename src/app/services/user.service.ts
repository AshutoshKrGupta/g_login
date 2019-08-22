import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    private  baseUrl = environment.baseUrl;
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(this.baseUrl + '/users');
    }

    getById(id: number) {
        return this.http.get<User>( this.baseUrl + `/users/${id}`);
    }
}