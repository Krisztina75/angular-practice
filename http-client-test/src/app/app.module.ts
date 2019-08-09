import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './page/index/index.component';
import { UserListComponent } from './page/user-list/user-list.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { NavComponent } from './nav/nav.component';
import { FilterPipe } from './pipe/filter.pipe';
import { OrderPipe } from './pipe/order.pipe';

const appRoutes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "users",
    component: UserListComponent
  },
  {
    path: "users/:id",
    component: UserEditComponent
  },
  {
    path: "**",
    component: IndexComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserListComponent,
    UserEditComponent,
    NavComponent,
    FilterPipe,
    OrderPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
