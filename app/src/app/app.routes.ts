import { Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

export const routes: Routes = [

  {
    path: '',
    component: EditProfileComponent
  },
  {
    path:'profile/:name',
    component: ViewProfileComponent
  }
];
