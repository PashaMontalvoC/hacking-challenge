import { PersonDTO } from '../../dto/personDTO';
import { PersonModel } from '../../model/personModel';

export const hydratePerson = (data: PersonDTO): PersonModel => {

    const person = data.data.tercero;

    const dataHydrate: PersonModel = {
        documentNumber: person.numDocumento,
        name: person.nombres,
        lastNameFather: person.apellidoPaterno,
        lastNameMother: person.apellidoMaterno,
        birthDate: person.fecNacimiento,
        gender: person.sexo,
        documentType: person.tipoDocumento,
        personType: person.tipoPersona,
        birthCountry: person.paisNacimiento
    };

    return dataHydrate;
};
