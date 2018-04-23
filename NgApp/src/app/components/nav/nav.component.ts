import { AuthGuardService } from './../../auth/auth-guard.service';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() SearchInfo: Boolean = false;
  @Input() ckeck: Boolean;
  constructor(private authGuard: AuthGuardService, private login: AuthService, private router: Router) { }

  ngOnInit() {
    this.ckeck = this.isAuthenticated();
  }
  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    return token !== undefined && token !== null;
  }
  logout() {
    this.login.logout();
  }
  openSearch() {
    this.SearchInfo = true;
  }
  close(): void {
    this.SearchInfo = false;
  }
}
