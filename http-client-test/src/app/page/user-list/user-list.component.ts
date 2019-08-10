import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  title = 'Data Table';
  userSubscription: Subscription;
  userList: User[] = [];
  newUser: User = new User();
  filterPhrase: string = '';
  orderKey: string = '';
  orderDirection = 1;                            //1: növekvő, -1: csökkenő
  changeCounter: number = 0;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userSubscription = this.userService.getAll().subscribe(
      users => this.userList = users
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  setOrderKey(key: string): void {
    if (key === this.orderKey) {
      this.orderDirection = this.orderDirection === -1 ? 1 : -1;
    } else {
      this.orderDirection = 1;
    }
    this.orderKey = key;
  }

  updateUser(user: User) {
    this.userService.update(user).subscribe(
      response => {
        this.changeCounter++;
      },
      err => console.log(err)
    )
  }

  createUser() {
    this.userService.create(this.newUser).subscribe(
      // user => console.log(user),
      user => {
        this.userList.push(user);
        this.newUser = new User();
        this.changeCounter++;
      },
      err => console.log(err)
    );
  }

  deleteUser(user: User) {
    this.userService.remove(user.id).subscribe(
      response => {
        let index = this.userList.indexOf(user);
        this.userList.splice(index, 1);
        this.changeCounter++;
      },
      err => console.error(err)
    )
  }
}