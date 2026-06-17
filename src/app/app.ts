import { Component, Input, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './components/user/user';
import { Admin } from './components/admin/admin';
import { Parent } from './components/parent/parent';
import { Child } from './components/child/child';
import { UsePipes } from './components/use-pipes/use-pipes';
import { UseService } from './use-service/use-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User, Admin, Parent, Child,UsePipes,UseService],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  // encapsulation: ViewEncapsulation.None,
})
export class App {
  protected readonly title = signal('angular_20_concepts_project');
}
