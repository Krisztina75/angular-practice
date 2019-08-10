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
    // this.ar.params.forEach(
    //   params => {
    //     this.userService.getAll().forEach(
    //       userArray => this.user = userArray.filter(
    //         u => u.id == params.id)[0]
    //     )
    //   }
    // )

    this.ar.params.subscribe(params => {
      this.userService.get(params.id).forEach(user => {     //itt a forEach-re panaszkodik
        this.user = user
      })
    })
  }

  ngOnInit() {
  }

  onSubmit(ev: Event): void {
    ev.preventDefault();
    this.router.navigateByUrl('/users');
  }
}
