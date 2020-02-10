import * as React from 'react';
import { FieldWrapper } from './styled';

interface Props {
    children: React.ReactNode;
    width?: number;
    labelText?: string;
    noBorder?: boolean;
}

export const Field: React.FC<Props> = ({
    children,
    width,
    labelText,
    noBorder,
}) => (
    <FieldWrapper width={width} labelText={labelText} noBorder={noBorder}>
        {children}
    </FieldWrapper>
);
