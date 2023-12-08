import { Component } from '@angular/core';
import { Todo } from '../models/todo.model';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';
import { state } from '@angular/animations';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos: Todo[] = [];
  filtroActual: filtrosValidos = 'todos';

  constructor( private store: Store<AppState>){}

  ngOnInit(): void{

    // this.store.select('todos')
    //   .subscribe( todos => this.todos = todos );
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.filtroActual = state.filtro;
    })
  }

}
