import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponentComponent } from "./shared/header-component/header-component.component";
import { FooterComponentComponent } from "./shared/footer-component/footer-component.component";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
   imports: [RouterModule, HeaderComponentComponent, FooterComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'codeNg';
}
