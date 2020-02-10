import styled from 'styled-components'

interface Props {
  width?: number;
  labelText?: string;
  noBorder?: boolean;
  noMargin?: boolean;
}

export const FieldWrapper = styled.fieldset`
  box-sizing: border-box;
  position: relative;
  padding: 18px 16px;
  padding: ${(props: Props) => props.labelText
    ? '24px 16px'
    : '18px 16px'};
  display: flex;
  border-radius: 4px;
  border: ${(props: Props) => props.noBorder
    ? 'none'
    : '1px solid #C5CBE0'};
  width: ${(props: Props) => props.width
    ? `${props.width}px`
    : '100%'};
  height: 56px;
  margin: 0;
`;
