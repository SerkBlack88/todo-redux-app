import { Action, createReducer, on } from '@ngrx/store';
import { borrar, clearCompleted, crear, editar, toggle, toggleAll } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
    new Todo('salvar el mundo'),
    new Todo('ir a dormir'),
    new Todo('levantarme temprano'),
];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo( texto ) ] ),
  on(borrar, (state, { id }) => state.filter( todo => todo.id !== id )),
  on( clearCompleted, (state: Todo[]) => state.filter( todo => !todo.completado )),
  on(toggleAll, (state, { completado }) => {
    return state.map( todo => {
      return {
        ...todo,
        completado: completado
      }
    })
  }),
  on(toggle, (state:Todo[], { id }) => {
    return state.map( todo => {

      if ( todo.id === id ) {
        return {
          ...todo,
          completado: !todo.completado
        }
      }
      else {
        return todo;
      }
  });
  }),
  on(editar, (state:Todo[], { id, texto }) => {
    return state.map( todo => {

      if ( todo.id === id ) {
        return {
          ...todo,
          texto: texto
        }
      }
      else {
        return todo;
      }
  });
  }),
);

export function todoReducer(state: any, action: Action) {
    return _todoReducer(state, action);
}

