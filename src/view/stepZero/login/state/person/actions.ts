import * as actionTypes from './actionTypes';
import { servicePerson } from './services';
import { PersonModel } from '../../model/personModel';

const fetchPersonRequest = () => ({
  type: actionTypes.FETCH_PERSON_REQUEST
});

const fetchPersonSuccess = (data: PersonModel) => ({
  type: actionTypes.FETCH_PERSON_SUCCESS,
  data
});

const fetchPersonFailure = (error: string) => ({
  type: actionTypes.FETCH_PERSON_FAILURE,
  error
});

export const fetchPerson = (history: any): Function => {
  return async dispatch => {
    dispatch(fetchPersonRequest());
    try {
      const data = await servicePerson.post();
      dispatch(fetchPersonSuccess(data));
      localStorage.setItem('rimacPerson', JSON.stringify(data));
      history.push('salud');
    } catch(e) {
      dispatch(fetchPersonFailure(e.message));
    }
  }
}
