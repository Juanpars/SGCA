import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userRole: string | null = '';
  selectedOption: string | null = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Obtener el rol del usuario desde el localStorage
    this.userRole = localStorage.getItem('userRole');
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  logout() {
    localStorage.removeItem('userRole');
    this.router.navigate(['/login']);
  }
}
