import { axiosAjax } from '../../../../../config/axios';
import { hydratePerson  } from './hydrator';
import { PersonModel } from '../../model/personModel';

const url = 'http://localhost:4000/dummy/obtenerdatospersona';

export const servicePerson = {
  async post(): Promise<PersonModel> {
    try {
      const { data }  = await axiosAjax.get(url);
      return hydratePerson(data);
    } catch(e) {
      throw new Error(e.message);
    }
  }
}
