import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  formData = {
    firstName: '',
    lastName: '',
    number: ''
  };

  number: string | null = ''
  hasError: boolean = false

  ngOnInit() {
    this.number = this.route?.snapshot?.queryParamMap?.get('number');
    const firstName = this.route?.snapshot?.queryParamMap?.get('firstName');
    const lastName = this.route?.snapshot?.queryParamMap?.get('lastName');

    this.formData = {
      firstName: firstName || '',
      lastName: lastName || '',
      number: this.number || ''
    }
    console.log(this.number); // Pepperoni
  }

  onSubmit() {
    this.http.put(`http://localhost:5000/contact/`, this.formData)
      .subscribe({
        next: data => console.log(data),
        error: error => { this.hasError = true }
      });
  }
}


