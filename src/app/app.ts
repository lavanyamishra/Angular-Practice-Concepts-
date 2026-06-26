import { Component, inject, Input, signal, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { User } from './components/user/user';
import { Admin } from './components/admin/admin';
import { Parent } from './components/parent/parent';
import { Child } from './components/child/child';
import { UsePipes } from './components/use-pipes/use-pipes';
import { UseService } from './use-service/use-service';
import { Dashboard } from './components/dashboard/dashboard';
import { Contact } from './components/contact/contact';
import { About } from './components/about/about';
import { TemplateForm } from './components/template-form/template-form';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { Signal } from './components/signal/signal';
import { SignalEasy } from "./components/signal-easy/signal-easy";
import { SignalForms } from './components/signal-forms/signal-forms';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    User,
    Admin,
    Parent,
    Child,
    UsePipes,
    UseService,
    Dashboard,
    Contact,
    About,
    TemplateForm,
    ReactiveForm,
    Signal,
    SignalEasy,
    SignalForms
],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  preserveWhitespaces: true,
  // encapsulation: ViewEncapsulation.None,
})
export class App {
  protected readonly title = signal('angular_20_concepts_project');

}
