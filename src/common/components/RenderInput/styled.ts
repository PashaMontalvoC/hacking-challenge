import styled from 'styled-components';

interface Props {
    margin?: string;
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: ${(props: Props) => props.margin && props.margin};
`;

export const LabelText = styled.label`
    position: absolute;
    top: 8px;
    color: #A3ABCC;
    font-size: 12px;
    font-family: Roboto;
`;

export const ErrorMessage = styled.label`
    font-family: Lato;
    color: #EF3340;
    font-size: 10px;
    position: absolute;
    bottom: 2px;
    right: 4px;
`;