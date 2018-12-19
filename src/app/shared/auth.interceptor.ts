import { AuthService } from './../auth/auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('intecept!', req);
        // const copiedReq = req.clone({headers: req.headers.set('','')});

        const copiedReq = req.clone({ params: req.params.set('auth', this.authService.getToken()) });
        return next.handle(copiedReq);
    }

}