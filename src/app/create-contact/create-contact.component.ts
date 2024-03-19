import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-contact.component.html',
  styleUrl: './create-contact.component.css'
})

export class CreateContactComponent {

  http: HttpClient

  constructor(private httpClient: HttpClient) {
    this.http = httpClient
  }

  formData = {
    firstName: '',
    lastName: '',
    number: ''
  };

  hasError: boolean = false

  onSubmit() {
    this.http.post(`http://localhost:5000/contact/`, this.formData)
      .subscribe({
        next: data => console.log(data),
        error: error => { this.hasError = true }
    });
    console.log("CHAAAMOOOOOUUU")
  }

}


