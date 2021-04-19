import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setForDefaultValues();
  }

  setForDefaultValues() {
    this.formGroup = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      message: ['']
    });
  }

}
