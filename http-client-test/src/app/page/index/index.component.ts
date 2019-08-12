import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  userList: User[] = [];
  userSubscription: Subscription;
  sum: number = 0;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userSubscription = this.userService.getAll().subscribe(
      users => this.userList = users
    );
  }

  numberOfUsers() {
    return this.userList.length;
  }

  numberOfActiveUsers() {
    return this.userList.filter(
      item => item.isActive === true
    ).length
  }

  numberOfNonActiveUsers() {
    return this.userList.filter(
      item => item.isActive === false
    ).length
  }

  // sumOfUsersBalance() {
  //   for (let i = 0; i < this.userList.length; i += 1) {
  //     this.sum += parseFloat(this.userList[i].balance.replace(/$/g, '').replace(/,/g, ''))
  //   }
  //   return this.sum;
  // }

  favouriteFruitApple() {
    return this.userList.filter(
      item => item.favoriteFruit === "apple"
    ).length
  }

  favouriteFruitStrawberry() {
    return this.userList.filter(
      item => item.favoriteFruit === "strawberry"
    ).length
  }

}
