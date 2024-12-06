import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent {
  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      // If the form is valid, proceed with HTTP POST to submit data.
      const formData = new FormData();

      // Iterate over the form values and append to formData
      Object.keys(form.value).forEach(key => {
        formData.append(key, form.value[key]);
      });

      // Send POST request to Zoho Form (or another server endpoint)
      this.http.post('https://forms.zohopublic.in/techwish/form/ContactUs/formperma/j7K5rPV3EvnRbXIAr2aIx5-nM9QMyrvskyzPJTzY9Us/htmlRecords/submit', formData)
        .subscribe({
          next: (response) => {
            console.log('Form submission successful', response);
            // Handle success (e.g., show a success message)
          },
          error: (error) => {
            console.error('Form submission failed', error);
            // Handle error (e.g., show an error message)
          },
        });
    }
  }
}
