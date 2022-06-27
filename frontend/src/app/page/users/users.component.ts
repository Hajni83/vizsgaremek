import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Observable<User[]> = this.userService.get();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onDelete(id?: string) {
    this.userService.delete(id).subscribe(()=>{
      this.users = this.userService.get();
    });
  }
}
