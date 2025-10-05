import { Component } from '@angular/core';
import { ListingService } from '../../core/services/listing.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listing',
  imports: [CommonModule,FormsModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css',
  providers:[ListingService]
})
export class ListingComponent {
  users:any = [];
  selectedUser: any = null;
  dropdownVal:any = 'Id';
  constructor(private listingService:ListingService) {}
    ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.listingService.getUsers().subscribe((data) => {
      this.users = data;
    });
    console.log("this is users data",this.users);
  }

  editRecord(record:Event) {
      this.selectedUser = { ...record };
  }

 saveUser() {
    if (!this.selectedUser) return;
    const index = this.users.findIndex((u:any) => u.id === this.selectedUser.id);
    if(index !== -1) {
      this.users[index] = {...this.selectedUser};
    }
    this.selectedUser = null;
  }

  deleteRecord(id: number) {
    this.users = this.users.filter((user:any) => user.id !== id);
    if(this.selectedUser && this.selectedUser.id === id) {
      this.selectedUser = null;
    }
  }


  dropDownChange(val:Event) {
     this.dropdownVal = (val.target as HTMLSelectElement).value;
    if(this.dropdownVal === 'A-Z') {
      this.users.sort((a:any, b:any) => a.name.localeCompare(b.name));
    } else if(this.dropdownVal === 'Id') {
       this.users.sort((a:any, b:any) => a.id - b.id);
    } else if(this.dropdownVal === 'Z-A') {
        this.users.sort((a:any, b:any) => b.name.localeCompare(a.name))
    } else if(this.dropdownVal === 'Id-desc') {
       this.users.sort((a:any, b:any) => b.id - a.id);
    }
  }
  cancelEdit() {
    this.selectedUser = null;
  }
}
