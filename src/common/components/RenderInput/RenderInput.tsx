import * as React from 'react';
import { Field } from '../Field';
import { Input } from '../Input';
import { LabelText, ErrorMessage } from './styled';

export const RenderInput = ({
    input,
    placeholder,
    labelText,
    width,
    maxLength,
    type,
    meta: { error, touched }
}) => {
    const errorMessage = (touched && error) ? error : null;
    return(
        <React.Fragment>
            <Field width={width} labelText={labelText}>
                {labelText && <LabelText>{labelText}</LabelText>}
                <Input
                    {...input}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    type={type}
                />
            </Field>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </React.Fragment>
    )
}
