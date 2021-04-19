import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { MockComponents } from 'ng-mocks';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { Overlay } from '@angular/cdk/overlay';
import { formatCurrency } from '@angular/common';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        ContactComponent,
        MockComponents(
          MatError,
          MatLabel,
          MatFormField
        )
      ],
      providers: [
        FormBuilder,
        MatSnackBar,
        Overlay
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should check email input', () => {
    // tirando a defnição do email
    component.formGroup.patchValue({ 'email': '' });
    fixture.autoDetectChanges();
    // Obtendo a tag mat-error e verficando a mensagem
    let inputEmail = document.getElementsByClassName('email');
    let matError = inputEmail[0].getElementsByTagName('mat-error');
    expect(matError[0].textContent!.trim()).toEqual('O email é obrigatório');

    // Definindo email inválido
    component.formGroup.patchValue({ 'email:': 'gui@quickfast' });
    fixture.autoDetectChanges();

    inputEmail = document.getElementsByClassName('email');
    matError = inputEmail[0].getElementsByTagName('mat-error');
    expect(matError[1].textContent!.trim()).toEqual('Email inválido')

    // Definindo email válido e verificando se não tem tag mat-error
    component.formGroup.patchValue({ 'email': 'gui@quickfast.com' });
    fixture.autoDetectChanges();

    inputEmail = document.getElementsByClassName('email');
    matError = inputEmail[0].getElementsByTagName('mat-error');
    expect(matError.length).toEqual(0);

  });

  it('should check name input', () => {
    // tirando a defnição do nome
    component.formGroup.patchValue({ 'name': '' });
    fixture.autoDetectChanges();
    // Obtendo a tag mat-error e verficando a mensagem de 'nome é obrigatório'
    let inputName = document.getElementsByClassName('name');
    let matError = inputName[0].getElementsByTagName('mat-error');
    expect(matError[0].textContent?.trim()).toEqual('O nome é obrigatorio')

    // excedendo o limite de 30 caracteres e verificando a mensagem de erro
    component.formGroup.patchValue({ 'name': 'ypkdedlnagbnprijfogiyjsctdcvbgrs' });
    fixture.autoDetectChanges();

    inputName = document.getElementsByClassName('name');
    matError = inputName[0].getElementsByTagName('mat-error')
    expect(matError[0].textContent?.trim()).toEqual('Você excedeu o limite de 30 caracteres')
    // console.log(matError[0].textContent, 'matError')
    expect(component.formGroup.controls['name'].valid).toBe(false)

    // verificando o limite minimo de 3 caracteres e verificando a mensagem de erro
    component.formGroup.patchValue({ 'name': 'ab' });
    fixture.autoDetectChanges();

    inputName = document.getElementsByClassName('name')
    matError = inputName[0].getElementsByTagName('mat-error')
    // console.log(matError[0].textContent);
    expect(matError[0].textContent?.trim()).toEqual('Digite o minimo de 3 caracteres')

  });


  it('should check phone input', () => {
    // tirando a defnição do phone
    component.formGroup.patchValue({ 'phone': '' });
    fixture.autoDetectChanges();
    // Obtendo a tag mat-error e verficando a mensagem de 'telefone obrigatório'
    let inputPhone = document.getElementsByClassName('telefone');
    let matError = inputPhone[0].getElementsByTagName('mat-error');
    expect(matError[0].textContent?.trim()).toEqual('Telefone é obrigatório')

    // verficando se o número de telefone é válido
    component.formGroup.patchValue({ 'phone': '95469971' })
    fixture.autoDetectChanges();

    component.formGroup.controls['phone'].valid
    expect(component.formGroup.controls['phone'].valid).toBe(true)

    // verficando se o número de telefone é inválido
    component.formGroup.patchValue({ 'phone': 'asda95469971' })
    fixture.autoDetectChanges();

    component.formGroup.controls['phone'].valid
    expect(component.formGroup.controls['phone'].valid).toBe(false)

  });


  it('should check messages input', () => {
    // verficando a mesangem de 'mensagem é obrigatório'
    component.formGroup.patchValue({ 'message': '' });
    let inputMsg = document.getElementsByClassName('mensagem');
    let matError = inputMsg[0].getElementsByTagName('mat-error');
    expect(matError[0].textContent?.trim()).toEqual('Mensagem é obrigatória');
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
