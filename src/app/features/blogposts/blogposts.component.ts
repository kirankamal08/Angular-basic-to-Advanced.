import { Component } from '@angular/core';
import { BlogServiceService } from '../../core/services/blog-service.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-blogposts',
  imports: [],
  templateUrl: './blogposts.component.html',
  styleUrl: './blogposts.component.css'
})
export class BlogpostsComponent {

  constructor(private blogService:BlogServiceService ) {}

  ngOnInit() {
    this.blogService.getBlogPosts().subscribe((data:any)=>{
      console.log(data);
  });
}
}
