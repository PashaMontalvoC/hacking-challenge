import * as React from 'react';
import './styled.scss';
import { RenderInput } from '../../../../../common/components/RenderInput';
import { Field, reduxForm } from 'redux-form';
import { Wrapper, FormWrapper, Button } from './styled';
import * as validate from '../../../../../utils/validations';
import { RenderCheckBox } from '../../../../../common/components/RenderCheckBox';
import { useSelector } from 'react-redux';

interface Props {
    handleSubmit: Function;
}

const minLengthDocumentNumber = validate.minLength(8, 'Documento no válido');
const dataPolicies = 'Acepto la Política de Protección de Datos Personales y los Términos y Condiciones.';
const comunicationPolicies = 'Acepto la Política de Envío de Comunicaciones Comerciales.'

const Form: React.FC<Props> = ({ handleSubmit }) => {

    const formValues = useSelector(state => state.form.stepZero);

    const personDocument = formValues && formValues.values && formValues.values.personDocument;
    const personBirth = formValues && formValues.values && formValues.values.personBirth;
    const personPhoneNumber = formValues && formValues.values && formValues.values.personPhoneNumber;

    const labelPersonDocument = personDocument ? 'Nro de Documento' : '';
    const labelPersonBirth = personBirth ? 'Fecha de nacimiento' : '';
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
                    <Field
                        component={RenderInput}
                        type="number"
                        width={288}
                        placeholder="Nro de Documento"
                        name="personDocument"
                        maxLength={8}
                        validate={[validate.required, minLengthDocumentNumber]}
                        labelText={labelPersonDocument}
                    />
                    <Field
                        component={RenderInput}
                        width={288}
                        maxLength={15}
                        placeholder="Fecha de nacimiento"
                        name="personBirth"
                        validate={[validate.required, validate.birthDate]}
                        labelText={labelPersonBirth}
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
    onSubmit(fields){}
})(Form);