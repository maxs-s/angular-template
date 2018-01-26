import { Injectable } from "@angular/core";
import { Http, Headers, } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { RequestOptionsArgs } from "@angular/http/src/interfaces";
import { environment } from './../../environments/environment';
import { HttpRequest, HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http/src/headers";
import { HttpResponse } from "@angular/common/http/src/response";

@Injectable()
export class BaseHttpService {

    private host: string = environment.host;

    constructor(private http: HttpClient) {
    }

    get(url: string) { 
       // let request: HttpRequest<null> = new HttpRequest<null>("GET", this.host + url, null, { headers: headers });
        return this.request(url);
    }

    /*
    post(url: string, data: any, options?: RequestOptionsArgs) { 
        return this.http.post(this.host + url, data, options);
    }

    patch(url: string, data: any, options?: RequestOptionsArgs) {     
        return this.http.patch(this.host + url, data, options);
    }

    put(url: string, data: any, options?: RequestOptionsArgs) {     
        return this.http.put(this.host + url, data, options);
    }

    delete(url: string, options?: RequestOptionsArgs) {
        return this.http.delete(this.host + url, options);
    }


        private request<R>(request: HttpRequest<R>, options?: RequestOptionsArgs) {
        return this.http.request(request)
    }
    */

    private request(url : string) {
        let request: HttpRequest<any> = new HttpRequest<any>("GET", this.host + url, null);
        return this.http.request(request);
    }

}
