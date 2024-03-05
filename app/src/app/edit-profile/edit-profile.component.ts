import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent {
  form = new FormGroup({
    name: new FormControl('')
  })

  constructor(private http: HttpClient, private router: Router) {
  }

  onSubmit() {
    this.http.post<{name:string}>('/api/hello', this.form.value).subscribe(resp => {
      void this.router.navigate(['profile', resp.name])
    })
  }
}
