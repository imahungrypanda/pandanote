import merge from 'lodash/merge';
import { RECIEVE_NOTE,
         RECIEVE_ALL_NOTES} from '../actions/notes_actions';


const NotesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECIEVE_ALL_NOTES:
      const notes = action.notes;
      const newState = merge({}, state, notes);
      return newState;

    case RECIEVE_NOTE:
      const note = action.note;
      return merge({}, state, note);

    default:
      return state;
  }
}

export default NotesReducer;