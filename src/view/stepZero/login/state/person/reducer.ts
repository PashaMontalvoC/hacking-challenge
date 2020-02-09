import * as actionTypes from './actionTypes';
import { PersonModel } from '../../model/personModel';


interface State {
  data: PersonModel;
  isFetching: boolean;
  error: boolean;
  errorMessage: string;
}

const initialState: State = {
  data: {},
  isFetching: false,
  error: false,
  errorMessage: ''
}

export const person = (state: State = initialState, action): State => {
  switch(action.type) {
    case actionTypes.FETCH_PERSON_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actionTypes.FETCH_PERSON_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.error
      }
    case actionTypes.FETCH_PERSON_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        data: action.data
      }
    default:
      return state;
  }
}