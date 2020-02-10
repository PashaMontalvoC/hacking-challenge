import styled, { css } from 'styled-components';

interface Props {
    disabled: boolean;
}

export const Wrapper = styled.div`
    max-width: 505px;
    display: flex;
    flex-direction: column;
`;

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

export const DocumentWrapper = styled.div`
    width: 480px;
    border: 1px solid #C5CBE0;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    margin-bottom: 16px;
`;

export const DocumentType = styled.div`
    width: 90px;
    border-right: 1px solid #C5CBE0;
    display: flex;
`;