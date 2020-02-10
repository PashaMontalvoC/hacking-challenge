import * as React from 'react';
import { Field } from '../Field';
import { Input } from '../Input';
import { Wrapper, LabelText, ErrorMessage } from './styled';

export const RenderInput = ({
  input,
  placeholder,
  labelText,
  width,
  maxLength,
  type,
  noBorder,
  margin,
  meta: { error, touched }
}) => {
  const errorMessage = (touched && error) ? error : null;
  return(
    <Wrapper margin={margin}>
      <Field width={width} labelText={labelText} noBorder={noBorder}>
        {labelText && <LabelText>{labelText}</LabelText>}
        <Input
          {...input}
          placeholder={placeholder}
          maxLength={maxLength}
          type={type}
        />
      </Field>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  )
}
