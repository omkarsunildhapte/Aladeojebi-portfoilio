import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../shared/servies/dataservies/data.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactForm!: FormGroup;
  data: any
  socialMedia: any
  constructor(private formBuilder: FormBuilder, private mainDataService: DataService) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      message: ['']
    });
    this.data = this.mainDataService.getData()
    this.socialMedia = this.mainDataService.getSocialMedia()
  }
  submitForm() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
    else {

    }
  }
}
