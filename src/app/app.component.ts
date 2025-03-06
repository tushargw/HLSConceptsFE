import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  patients: any | undefined;

  http = inject(HttpClient);
  title = 'Frontend';

  ngOnInit(): void {
    this.http.get('https://localhost:7182/api/Patient?maxCount=20').subscribe({
      next: (patients) => {
        this.patients = patients;
      },
      error: (error) => console.error(error),
      complete: () => console.debug('Patients retrieved.'),
    });
  }
}
