import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Aquí puedes agregar lógica de autenticación
    if (this.username === 'admin') {
      localStorage.setItem('userRole', 'admin');
    } else if (this.username === 'jefe') {
      localStorage.setItem('userRole', 'jefe');
    } else if (this.username === 'usuario') {
      localStorage.setItem('userRole', 'usuario');
    } else {
      alert('Credenciales inválidas');
      return;
    }

    // Redirige al usuario a la página de inicio después de iniciar sesión
    this.router.navigate(['/home']);
  }
}
