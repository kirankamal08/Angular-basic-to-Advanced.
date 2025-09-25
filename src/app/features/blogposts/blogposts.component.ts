import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BlogServiceService } from '../../core/services/blog-service.service';
import { HttpClient } from '@angular/common/http';
//import { NgForOf } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { CommonModule } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { User } from '../../core/models/User';
import { SortPipe } from '../../core/pipes/sort.pipe';

@Component({
  selector: 'app-blogposts',
  imports: [CommonModule,FormsModule,SortPipe],
  templateUrl: './blogposts.component.html',
  // providers: [BsModalService],
  styleUrl: './blogposts.component.css'
})
export class BlogpostsComponent {
  userData:User[] = [];
  selectedUser?: User;
  selectedFilter: string = 'title_ascs';
  filteredData: User[] = [];
  searchText:any;
  @ViewChild('editShowPopup') editShowPopup!: TemplateRef<any>;
  modelEditPopup! :BsModalRef
  constructor(private blogService:BlogServiceService, private modalService:BsModalService,  ) {}

  ngOnInit() {
      this.blogService.getBlogPosts().subscribe((data:any)=> {
        this.userData = data;
        this.filteredData = data;
        this.userData.sort((a,b) => a.name.localeCompare(b.name));
        console.log(this.userData);

    });
  }

  changeDropDown(event:string) {
    const value = event;
    if(value === 'id_ascs') {
      this.userData.sort((a,b) => a.id - b.id )
    } else if(value === 'id_dscs') {
        this.userData.sort((a,b) => b.id - a.id )
    } else if(value === 'title_ascs') {
      this.userData.sort((a,b) => a.name.localeCompare(b.name));
    } else if(value === 'title_dscs') {
        this.userData.sort((a,b) => b.name.localeCompare(a.name));
    }
 }

//  searchInputFn(event:Event) {
//  const query = (event.target as HTMLInputElement).value.toLowerCase();
//   this.filteredData = this.userData.filter(user => user.name.toLowerCase().includes(query));
//  }
}
