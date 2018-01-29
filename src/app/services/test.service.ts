import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { BaseDictionary } from './../models/base-dictionary';

@Injectable()
export class TestService {

    constructor(private http: BaseHttpService) { }

    getFoods() {
        return this.http.get<BaseDictionary[]>('dictionaries/industry-types');
    }

}
