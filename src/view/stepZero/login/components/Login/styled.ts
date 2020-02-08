import styled, { css } from 'styled-components';

interface Props {
    disabled: boolean;
}

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Button = styled.button`
    width: 176px;
    height: 56px;
    font-weight: bold;
    font-size: 14px;
    background: #EF3340;
    color: #FFFFFF;
    line-height: 16px;
    text-align: center;
    border-radius: 8px;
    border: none;
    font-family: Lato;
    margin-top: 40px;
    cursor: pointer;
    ${(props: Props) => props.disabled && css`
        pointer-events: none;
        user-select: none;
        background: #F0F2FA;
        color: #C5CBE0;
    `}
`;

export const Wrapper = styled.div`
    max-width: 288px;
    display: flex;
    flex-direction: column;
`;