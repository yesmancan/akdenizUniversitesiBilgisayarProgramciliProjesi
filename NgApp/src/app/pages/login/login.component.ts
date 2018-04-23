import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../_services/auth.service';
import { AuthGuardService } from '../../auth/auth-guard.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    providers: [AuthService]
})

export class LoginComponent implements OnInit {

    public mail: string;
    public password: string;

    constructor(
        private authService: AuthService,
        private authGuard: AuthGuardService,
        private router: Router
    ) { }

    ngOnInit() {
        if (this.authGuard.canActivate()) {
            this.router.navigate(['pages/dashboard']);
        }
    }
    onlogin() {
        this.authService.login(this.mail, this.password).then(res => {
            if (res !== undefined) {
                if (res.status === 200) {
                    this.router.navigateByUrl('pages/dashboard');
                    return true;
                }
            }
        });
    }
}
