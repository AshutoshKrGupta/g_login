import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../model';
import { UserService } from '../services';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.users = users;
      });
  }

}
