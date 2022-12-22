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

  async ngOnInit(): Promise<void> {
    this.users = await this.usersService.fetchCharacters();
    console.log(this.users);
  }

} 
