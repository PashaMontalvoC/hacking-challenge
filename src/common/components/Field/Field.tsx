import * as React from 'react';
import { FieldWrapper } from './styled';

interface Props {
    children: React.ReactNode;
    width?: number;
    labelText?: string;
}

export const Field: React.FC<Props> = ({ children, width, labelText }) => (
    <FieldWrapper width={width} labelText={labelText}>
        {children}
    </FieldWrapper>
);
