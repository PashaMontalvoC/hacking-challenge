import * as React from 'react';
import './styled.scss';
import { RenderInput } from '../../../../../common/components/RenderInput';
import { Field, reduxForm } from 'redux-form';
import { Wrapper, FormWrapper } from './styled';
import { useSelector } from 'react-redux';

interface Props {
    handleSubmit: Function;
}

const Form: React.FC<Props> = ({ handleSubmit }) => {

    const formValues = useSelector(state => state.form.stepOne);
    const personName = useSelector(state =>state.person.data.name);

    const camelizeString = (word: string) => {
        return word.replace(/(?:^\w|[A-Z]|\b\w)/g, function(element, index) {
          return index == 0 ? element.toLowerCase() : element.toUpperCase();
        }).replace(/\s+/g, '');
    }

    console.log('PÈRSON', personName);

    const personDocument = formValues && formValues.values && formValues.values.personDocument;
    const personBirth = formValues && formValues.values && formValues.values.personBirth;
    const personPhoneNumber = formValues && formValues.values && formValues.values.personPhoneNumber;

    const labelPersonDocument = personDocument ? 'Nro de Documento' : '';
    const labelPersonBirth = personBirth ? 'Fecha de nacimiento' : '';
    const labelPersonPhoneNumbert = personPhoneNumber ? 'Celular' : '';

    const formErrors = formValues && formValues.syncErrors;
    
    return(
        <div className="personForm">
            <Wrapper>
                <h2 className="personForm__title">
                    Hola, <span>{personName && camelizeString(personName)}</span>
                </h2>
                <span className="personForm__information">Valida que los datos sean correctos.</span>
                <span className="personForm__data">Datos personales del titular</span>
                <FormWrapper onSubmit={handleSubmit}>
                    <Field
                        component={RenderInput}
                        type="number"
                        width={480}
                        placeholder="Nro de Documento"
                        name="personDocument"
                        maxLength={8}
                        labelText={labelPersonDocument}
                    />
                    <Field
                        component={RenderInput}
                        type="text"
                        width={480}
                        placeholder="Nombres"
                        name="personName"
                        maxLength={50}
                    />
                    <Field
                        component={RenderInput}
                        type="text"
                        width={480}
                        placeholder="Apellido Paterno"
                        name="personLastNameFather"
                        maxLength={50}
                    />
                    <Field
                        component={RenderInput}
                        type="text"
                        width={480}
                        placeholder="Apellido Materno"
                        name="personLastNameMother"
                        maxLength={50}
                    />
                    <Field
                        component={RenderInput}
                        type="text"
                        width={480}
                        placeholder="Fecha de Nacimiento"
                        name="personBirthDate"
                        maxLength={10}
                    />
                </FormWrapper>
            </Wrapper>
        </div>
    )
};

export const PersonForm = reduxForm({
    form: 'stepOne',
    onSubmit(fields, dispatch){
    }
})(Form);