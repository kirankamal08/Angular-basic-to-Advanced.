import { Routes } from '@angular/router';
import { Day1FundamentalsComponent } from './features/day-1-fundamentals/day-1-fundamentals.component';
import { ChildComponent } from './features/day-1-fundamentals/child/child.component';
import { AppComponent } from './app.component';
import { register } from 'node:module';
import { RegisterComponent } from './features/users/register/register.component';
import { BlogpostsComponent } from './features/blogposts/blogposts.component';
import { ListingComponent } from './features/listing/listing.component';
import { UserFormComponent } from './features/user-form/user-form.component';

export const routes: Routes = [
    // {
    //     path:'basic-fundamentals',
    //     component:Day1FundamentalsComponent,
    //     data: {title:'Basic fundamentals'}
    // },
    // {
    //     path:'child-view',
    //     component:ChildComponent,
    //     data:{title:'chils-view'}
    // }
     { path: 'parent-component', component: Day1FundamentalsComponent },
    { path: 'child-view', component: ChildComponent },
    { path: '', component: Day1FundamentalsComponent },
     { path: 'register', component:RegisterComponent },
     {path:'blog', component:BlogpostsComponent},
      {path:'listing', component:ListingComponent},
      {path:'user', component:UserFormComponent}
    //{ path: 'contact', component: ContactComponent },
    //{ path: '', redirectTo: '/basic-fundamentals', pathMatch: 'full' },
  //  { path: '', component: AppComponent, pathMatch: 'full' }
];
