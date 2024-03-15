import { Component } from '@angular/core';
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

  
  http: HttpClient

  constructor(private httpClient : HttpClient) {
    this.http = httpClient
  }
  
  formData = {
    firstName: '',
    lastName: '',
    number: ''
  };

  onSubmit(){
    
    
    this.http.put(`http://localhost:5000/contact/`, this.formData)
                .subscribe(data => console.log (data));
                console.log("CHAAAMOOOOOUUU")
  }
             
}


