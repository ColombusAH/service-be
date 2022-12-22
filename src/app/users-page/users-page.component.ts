import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  constructor(private usersService: UsersService) { }
  users: any[] = [];
  currentPage: number = 1;

  async ngOnInit(): Promise<void> {
    this.users = await this.usersService.fetchCharacters(this.currentPage);
    console.log(this.users);
  }

  async nextPage() {
    this.currentPage += 1;
    this.users = await this.usersService.fetchCharacters(this.currentPage);
  }
  async prevPage() {
    if (this.currentPage === 1) {
      return;
    }
    this.currentPage -= 1;
    this.users = await this.usersService.fetchCharacters(this.currentPage);
  }

} 
