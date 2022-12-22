import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from '../models/profile.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() profile: UserProfile | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
