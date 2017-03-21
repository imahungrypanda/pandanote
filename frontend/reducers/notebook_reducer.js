import merge from 'lodash/merge';
import { RECEIVE_NOTEBOOKS,
         RECEIVE_NOTEBOOK,
         MAKE_NOTEBOOK,
         DELETE_NOTEBOOK,
         CURRENT_NOTEBOOK
       } from '../actions/notebook_actions';

const _nullState = {
  currentNotebook: null,
  allNotebooks: {}
};

const NotebookReducer = (state = _nullState, action) => {
  let newState = merge({}, state);
  let keys = null;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_NOTEBOOKS:
      newState.allNotebooks = action.notebooks;
      keys = Object.keys(newState.allNotebooks);
      newState.currentNotebook = newState.allNotebooks[keys[0]];
      return newState;

    case RECEIVE_NOTEBOOK:
      newState.currentNotebook = action.notebook;
      return newState;

    case DELETE_NOTEBOOK:
      delete newState.allNotebooks[action.notebook.id];
      keys = Object.keys(newState.allNotebooks);
      newState.currentNotebook = newState.allNotebooks[keys[0]];
      return newState;

    case MAKE_NOTEBOOK:
      newState.allNotebooks[action.notebook.id] = action.notebook;
      newState.currentNotebook = action.notebook;
      return newState;

    case CURRENT_NOTEBOOK:
      newState.currentNotebook = action.notebook;
      return newState;

    default:
      return state;
  }
};

export default NotebookReducer;
