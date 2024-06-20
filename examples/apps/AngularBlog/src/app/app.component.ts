import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './presentation/shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './presentation/shared/components/footer/footer.component';

@Component({
  standalone: true,
  imports: [RouterModule, FooterComponent, NavBarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularBlog';
}
