import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  public formGroup!: FormGroup;
  public EMAIL_REGEXP: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  public PHONE_REGEXP: RegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

  ngOnInit(): void {
    this.setForDefaultValues();
  }

  sendForm(message: string) {
    if (this.formGroup.valid) {
      //Apresentar mensagem de email enviado com sucesso
      this.snackBar.open('Formulário enviado com sucesso!', 'Undo', {
        duration: 3000,
      });
      //Deixar o formulário em branco
      this.formGroup.reset(this.formGroup);
    }
    //Apresentar mensagem de erro
    else
      this.snackBar.open('Formulário inválido! Verfique os campos.', 'Undo', {
        duration: 3000,
      });
  }

  setForDefaultValues() {
    this.formGroup = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.EMAIL_REGEXP),
        ],
      ],
      phone: ['', [Validators.required, Validators.pattern(this.PHONE_REGEXP)]],
      message: ['', [Validators.required]],
    });
  }
}
