import { Component, inject } from '@angular/core';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly authService = inject(AuthService);

  Login(id: string, value: string) {
    this.authService.isAuthorizedUser(id, value);
  }
}
