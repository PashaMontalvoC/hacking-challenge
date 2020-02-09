import styled from 'styled-components';

interface Props {
    width?: number;
}

export const InputWrapper = styled.input`
    border-style: none;
    width: ${(props: Props) => props.width
        ? `${props.width}px`
        : '100%'};
    display: flex;
    align-items: center;
    font-family: Lato;
    font-size: 16px;
    user-select: none;
`;