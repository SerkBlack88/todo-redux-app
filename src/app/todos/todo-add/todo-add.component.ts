import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  txtInput: FormControl;

  constructor( private store: Store<AppState>) {
    this.txtInput = new FormControl('Hola', Validators.required)
  }

  agregar(){

    if (this.txtInput.invalid ) { return; }
    console.log( this.txtInput.value );
    console.log( this.txtInput.valid );
    this.store.dispatch( actions.crear( { texto: this.txtInput.value } ) );
    this.txtInput.reset();  
  }

}
