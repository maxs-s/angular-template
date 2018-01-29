import { Injectable } from "@angular/core";
import { Http, Headers, } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BaseResponse } from './../models/base-response';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseHttpService {

    private host: string = environment.host;

    constructor(private http: HttpClient) {
    }

    get<T>(url: string, headers?: HttpHeaders): Observable<T> {
        return this.request<T>('GET', url, null, headers);
    }

    post<T, R>(url: string, data: R, headers?: HttpHeaders): Observable<T> {
        return this.request<T>('POST', url, data, headers);
    }

    patch<T, R>(url: string, data: R, headers?: HttpHeaders): Observable<T> {
        return this.request<T>('PATCH', url, data, headers);
    }

    put<T, R>(url: string, data: R, headers?: HttpHeaders): Observable<T> {
        return this.request<T>('PUT', url, data, headers);
    }

    delete<T>(url: string, headers?: HttpHeaders): Observable<T> {
        return this.request<T>('DELETE', url, null, headers);
    }

    private request<T>(method: string, url: string, body?: any, headers?: HttpHeaders) {
        if (!headers) {
            headers = new HttpHeaders();
        }
        headers = headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGhhc3RlZXBheTguY29tIiwidW5pcXVlX25hbWUbWluIiwiYXV0aG1ldGhvZCI6IkFkbWluV2ViIiwiVXNlcklkIjoiMSIsIm5iZiI6MTUxNzIyODUzOCwiZXhwIjoxNTE3MzE0OTM4LCJpYXQiOjE1MTcyMjg1Mzh9.vwnqq-NkClv9GNIraZRV2KXQewtkgAu4lYa6v-Bua-Y');

        return this.http.request<BaseResponse<T>>(method, this.host + url, { headers: headers, body: body })
            .map(result => result.data);
    }

}
