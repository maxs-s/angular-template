import { Injectable } from "@angular/core";
import { Http, Headers, } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { RequestOptionsArgs } from "@angular/http/src/interfaces";
import { environment } from './../../environments/environment';
import { HttpRequest, HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class BaseHttpService {

    private host: string = environment.host;

    constructor(private http: HttpClient) {
    }

    get(url: string, headers?: HttpHeaders) {
        return this.request('GET', url, null, headers);
    }

    post(url: string, data: any, headers?: HttpHeaders) {
        return this.request('POST', url, data, headers, );
    }

    patch(url: string, data: any, headers?: HttpHeaders) {
        return this.request('PATCH', url, data, headers);
    }

    put(url: string, data: any, headers?: HttpHeaders) {
        return this.request('PUT', url, data, headers);
    }

    delete(url: string, headers?: HttpHeaders) {
        return this.request('DELETE', url, null, headers);
    }

    private request(method: string, url: string, body?: any, headers?: HttpHeaders) {
        if (!headers) {
            headers = new HttpHeaders();
        }

        headers.append("fsdfsdf", "11");
        headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGhhc3RlZXBheTguY29tIiwidW5pcXVlX25hbWUiOiJhZG1pbkBoYXN0ZWVwYXk4LmNvbSIsIlVzZXJOYW1lIjoiTWF4Iiwicm9sZSI6ImFkbWluIiwiYXV0aG1ldGhvZCI6IkFkbWluV2ViIiwiVXNlcklkIjoiMSIsIm5iZiI6MTUxNjk3MjkyMiwiZXhwIjoxNTE3MDU5MzIyLCJpYXQiOjE1MTY5NzI5MjJ9.jG9UYnj51Sy7nFw9X5N5VeAOiDO5QOjOP0oLZpLmJY');      
        return this.http.request(method, this.host + url, { headers: headers, body: body });
    }

}
