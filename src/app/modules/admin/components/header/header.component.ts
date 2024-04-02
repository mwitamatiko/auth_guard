import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService){}

  ngOnInit(): void {
    
  }

  logout(): void {
    this.auth.logout();
  }

}
