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

  cancelEdit() {
    this.selectedUser = null;
  }
}
