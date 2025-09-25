import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/User';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(users: User[], searchText: string): User[] {
    if (!users) return [];
    if (!searchText) return users;

    searchText = searchText.toLowerCase();

    return users.filter(user =>
      user.name.toLowerCase().includes(searchText) ||
      user.email.toLowerCase().includes(searchText) ||
      user.username.toLowerCase().includes(searchText)
    );
  }
}
