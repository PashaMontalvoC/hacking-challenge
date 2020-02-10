import * as React from 'react';
import './styled.scss';
import { RenderInput } from '../../../../../common/components/RenderInput';
import { Field, reduxForm, change } from 'redux-form';
import {
  Wrapper,
  FormWrapper,
  DocumentWrapper,
  DocumentType
} from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { RenderSelect } from '../../../../../common/components/RenderSelect';
import { PersonModel } from '../../../../stepZero/login/model/personModel';
import { BreadCrumb } from '../../../../../common/components/BreadCrumb';

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

interface Props {
  handleSubmit: Function;
  history: any;
}

const Form: React.FC<Props> = ({ handleSubmit, history }) => {

  const formValues = useSelector(state => state.form.stepOne);
  let personData: PersonModel;

  const personDocument = formValues && formValues.values && formValues.values.personDocument;
  const personName = formValues && formValues.values && formValues.values.personName;
  const personLastNameFather = formValues && formValues.values && formValues.values.personLastNameFather;
  const personLastNameMother = formValues && formValues.values && formValues.values.personLastNameMother;
  const personBirthDate = formValues && formValues.values && formValues.values.personBirthDate;

  const labelPersonDocument = personDocument ? 'Nro de Documento' : '';
  const labelPersonName = personName ? 'Nombres' : '';
  const labelPersonLastNameFather = personLastNameFather ? 'Apellido Paterno' : '';
  const labelPersonLastNameMother = personLastNameMother ? 'Apellido Materno' : '';
  const labelPersonBirthDate = personBirthDate ? 'Fecha de Nacimiento' : '';

  const dispatch = useDispatch();

  React.useEffect(() => {
    personData = JSON.parse(localStorage.getItem('rimacPerson'));
    if (personData) {
      dispatch(change('stepOne', 'typeDocument', personData.documentType));
      dispatch(change('stepOne', 'personDocument', personData.documentNumber));
      dispatch(change('stepOne', 'personName', personData.name));
      dispatch(change('stepOne', 'personLastNameFather', personData.lastNameFather));
      dispatch(change('stepOne', 'personLastNameMother', personData.lastNameMother));
      dispatch(change('stepOne', 'personBirthDate', personData.birthDate));
    } else {
      history.push('/');
    }
  }, []);

  const handleClickBreadCrumb = () => {
    history.push('/');
  };

  return(
    <div className="personForm">
      <BreadCrumb stepNumber={1} handleClick={handleClickBreadCrumb} />
      <Wrapper>
        <h2 className="personForm__title">
            Hola, <span>{personName}</span>
        </h2>
        <span className="personForm__information">Valida que los datos sean correctos.</span>
        <span className="personForm__data">Datos personales del titular</span>
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
                  width={390}
                  placeholder="Nro de Documento"
                  name="personDocument"
                  maxLength={8}
                  labelText={labelPersonDocument}
                  noBorder
                />
            </DocumentWrapper>
            <Field
              component={RenderInput}
              type="text"
              width={480}
              placeholder="Nombres"
              name="personName"
              maxLength={50}
              labelText={labelPersonName}
              margin="0 0 16px 0"
            />
            <Field
              component={RenderInput}
              type="text"
              width={480}
              placeholder="Apellido Paterno"
              name="personLastNameFather"
              maxLength={50}
              labelText={labelPersonLastNameFather}
              margin="0 0 16px 0"
            />
            <Field
              component={RenderInput}
              type="text"
              width={480}
              placeholder="Apellido Materno"
              name="personLastNameMother"
              maxLength={50}
              labelText={labelPersonLastNameMother}
              margin="0 0 16px 0"
            />
            <Field
              component={RenderInput}
              type="text"
              width={480}
              placeholder="Fecha de Nacimiento"
              name="personBirthDate"
              maxLength={10}
              labelText={labelPersonBirthDate}
              margin="0 0 16px 0"
            />
        </FormWrapper>
      </Wrapper>
    </div>
  )
};

export const PersonForm = reduxForm({
  form: 'stepOne'
})(Form);
