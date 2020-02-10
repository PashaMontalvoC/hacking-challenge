import * as React from 'react';
import './styled.scss';
import { RenderInput } from '../../../../../common/components/RenderInput';
import { Field, reduxForm } from 'redux-form';
import {
    Wrapper,
    DocumentWrapper,
    DocumentType,
    FormWrapper,
    Button
} from './styled';
import * as validate from '../../../../../utils/validations';
import { RenderCheckBox } from '../../../../../common/components/RenderCheckBox';
import { useSelector } from 'react-redux';
import { fetchPerson } from '../../state/person/actions';
import { RenderSelect } from '../../../../../common/components/RenderSelect';

interface Props {
    handleSubmit: Function;
}

const options = [
    {
        value: '2',
        label: 'DNI'
    },
    {
        value: '3',
        label: 'CE'
    }
];

const minLengthDocumentNumber = validate.minLength(8, 'Documento no válido');
const dataPolicies = 'Acepto la Política de Protección de Datos Personales y los Términos y Condiciones.';
const comunicationPolicies = 'Acepto la Política de Envío de Comunicaciones Comerciales.'

const Form: React.FC<Props> = ({ handleSubmit }) => {

    const formValues = useSelector(state => state.form.stepZero);

    const personDocument = formValues && formValues.values && formValues.values.personDocument;
    const personBirthDate = formValues && formValues.values && formValues.values.personBirthDate;
    const personPhoneNumber = formValues && formValues.values && formValues.values.personPhoneNumber;

    const labelPersonDocument = personDocument ? 'Nro de Documento' : '';
    const labelPersonBirthDate = personBirthDate ? 'Fecha de nacimiento' : '';
    const labelPersonPhoneNumbert = personPhoneNumber ? 'Celular' : '';

    const formErrors = formValues && formValues.syncErrors;
    
    return(
        <div className="login">
            <Wrapper>
                <h2 className="login__title">
                    Obtén tu <span>seguro ahora</span>
                </h2>
                <span className="login__information">Ingresa los datos para comenzar</span>
                <FormWrapper onSubmit={handleSubmit}>
                    <DocumentWrapper>
                        <DocumentType>
                            <Field 
                                component={RenderSelect}
                                name="typeDocument"
                                options={options}
                                width="90px"
                            />
                        </DocumentType>
                        <Field
                            component={RenderInput}
                            type="number"
                            width={198}
                            placeholder="Nro de Documento"
                            name="personDocument"
                            maxLength={12}
                            validate={[validate.required, minLengthDocumentNumber]}
                            labelText={labelPersonDocument}
                            noBorder
                        />
                    </DocumentWrapper>
                    <Field
                        component={RenderInput}
                        width={288}
                        maxLength={10}
                        placeholder="Fecha de nacimiento"
                        name="personBirthDate"
                        validate={[validate.required, validate.birthDate]}
                        labelText={labelPersonBirthDate}
                        margin="0 0 16px 0"
                    />
                    <Field
                        component={RenderInput}
                        type="number"
                        width={288}
                        placeholder="Celular"
                        name="personPhoneNumber"
                        maxLength={9}
                        validate={[validate.required, validate.mobileNumberValid]}
                        labelText={labelPersonPhoneNumbert}
                    />
                    <Field
                        component={RenderCheckBox}
                        name="dataPolicies"
                        text={dataPolicies}
                        textColor="#A3ABCC"
                        width={288}
                        widthLabel={250}
                        validate={validate.required}
                        margin="16px 0 0 0"
                    />
                    <Field
                        component={RenderCheckBox}
                        name="comunicationPolicies"
                        text={comunicationPolicies}
                        textColor="#A3ABCC"
                        width={288}
                        widthLabel={250}
                        validate={validate.required}
                        margin="16px 0 0 0"
                    />
                    <Button type="submit" disabled={!!formErrors}>COMENCEMOS</Button>
                </FormWrapper>
            </Wrapper>
        </div>
    )
};

export const Login = reduxForm({
    form: 'stepZero',
    onSubmit(fields, dispatch, { history }){
        dispatch(fetchPerson(history));
    }
})(Form);