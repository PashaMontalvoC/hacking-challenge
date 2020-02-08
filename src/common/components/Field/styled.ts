import styled from 'styled-components'

interface Props {
    width?: number;
    labelText?: string;
}

export const FieldWrapper = styled.fieldset`
    margin: 8px 0;
    box-sizing: border-box;
    position: relative;
    padding: 18px 16px;
    padding: ${(props: Props) => props.labelText
        ? '24px 16px'
        : '18px 16px'};
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #C5CBE0;
    width: ${(props: Props) => props.width
        ? `${props.width}px`
        : '100%'};
    height: 56px;
`;
