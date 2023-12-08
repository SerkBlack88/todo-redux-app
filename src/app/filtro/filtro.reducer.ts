import { Action, createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';
import { Todo } from '../todos/models/todo.model';

export const initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer(
  initialState,
  on( setFiltro, (state, { filtro }) => filtro as any),
);

export function filtroReducer(state: any, action: Action) {
    return _filtroReducer(state, action);
}