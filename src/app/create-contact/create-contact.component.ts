import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-contact.component.html',
  styleUrl: './create-contact.component.css'
})

export class CreateContactComponent {

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  formData = {
    firstName: '',
    lastName: '',
    number: ''
  };

  hasError: boolean = false

  onSubmit() {
    this.http.post(`http://localhost:5000/contact/`, this.formData)
      .subscribe({
        next: data => this.router?.navigate(['/lista']),
        error: error => this.hasError = true,
    });
  }
}


