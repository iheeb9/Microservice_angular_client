import { AssociationDetailsComponent } from './components/back/associations/association-details/association-details.component';
import { AddAssociationComponent } from './components/back/associations/add-association/add-association.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AssociationsListComponent } from './components/back/associations/association-list/associations-list.component';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './layouts/user_Layout/users.component';
// @ts-ignore
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UsersComponent,
    LoginComponent,
    AssociationsListComponent,
    AddAssociationComponent,
    AssociationDetailsComponent
  ],
  providers: [
    // {provide:HTTP_INTERCEPTORS,
    //   useClass:TokenInterceptorService,
    //   multi:true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
