import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: `
    <a href="/">
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
    </a>
    <section class="content">
      <router-outlet> </router-outlet>
    </section>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'home';
}
