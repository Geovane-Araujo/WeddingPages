import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
    private readonly BASE_URL = "https://sayuriemessias.com.br/v1/api"

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const requestClone = request.clone({
            url: this.BASE_URL + request.url
        })
        return next.handle(requestClone);
    }
}