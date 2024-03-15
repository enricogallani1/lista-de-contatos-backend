import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})

export class ListaComponent {

  http: HttpClient

  constructor(private httpClient : HttpClient) {
    this.http = httpClient
  }

  public contacts:any = [];

  ngOnInit(): void {
     
    this.listContact()
 }

  listContact() {
    this.http.get(`http://localhost:5000/contact/`)
             .subscribe(resultado => this.contacts = resultado);
  }
  
  

}

