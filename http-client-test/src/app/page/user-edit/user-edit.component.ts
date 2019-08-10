import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User = new User();

  constructor(
    private ar: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {

    this.ar.params.subscribe(params => {
      this.userService.getOne(params.id).forEach(user => {
        this.user = user
      })
    })
  }

  ngOnInit() {
  }

  onSubmit(ev: Event): void {

    ev.preventDefault();

    if (this.user.id !== 0) {
      this.userService.update(this.user).subscribe(
        response => this.router.navigateByUrl('/users')
      );
    } else {
      this.userService.create(this.user).forEach(
        response => this.router.navigateByUrl('/users')
      )
    }
  }
}
