import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';

@Injectable()
export class TestService {

    constructor(private http: BaseHttpService) { }

    getFoods() {
        return this.http.get('supports/faq');
    }
}