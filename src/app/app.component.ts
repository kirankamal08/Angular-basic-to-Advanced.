import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponentComponent } from "./shared/header-component/header-component.component";
import { FooterComponentComponent } from "./shared/footer-component/footer-component.component";
import { BlogpostsComponent } from './features/blogposts/blogposts.component';
import { HttpClient } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
//import { BsModalService } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
   imports: [RouterModule, HeaderComponentComponent, FooterComponentComponent,BlogpostsComponent,
    ModalModule
    ],
  templateUrl: './app.component.html',
 //  providers: [BsModalService],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'codeNg';
}
