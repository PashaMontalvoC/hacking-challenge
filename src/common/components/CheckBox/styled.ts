import styled, { css } from 'styled-components';

interface Props{
  size?: number;
  right?: boolean;
  borderColor?: string;
  borderBold?: boolean;
  background?: string;
  disabled?: boolean;
  textColor?: string;
  checked?: boolean;
  value?: boolean;
  widthLabel?: number;
  width?: number;
  margin?: string;
}

export const CheckBoxMask = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: ${(props: Props) => props.background};
  border-width: ${(props: Props) => props.borderBold ? '2px' : '1px'};
  border-style: solid;
  border-color: ${(props: Props)=> props.borderColor && props.borderColor};
  border-radius: 4px;
  width: ${(props: Props) => `${props.size}px` || '14px'};
  height: ${(props: Props) => `${props.size}px` || '14px'};
  ${(props: Props) => props.value && css`
    background: #83CC5E;
    border-color: #83CC5E;
  `}
`;

export const CheckBoxHidden = styled.input`
  margin: 0;
  padding: 0;
  position: relative;
  opacity: 0;
  display: none;
  ~ div {
    display: none;
  }
  :checked ~ div {
    display: flex;
  }
  ${(props: Props) => props.checked && css`
    & ~ div{
      display: flex;
    }
  `}
`;

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  flex-direction: ${(props: Props) => props.right
    ? 'row-reverse'
    : 'row'
  };
  cursor: pointer;
  ${(props: Props) => props.disabled && css`
    opacity: .7;
    pointer-events: none;
  `}
  width: ${(props: Props) => props.width && `${props.width}px`};
  margin: ${(props: Props) => props.margin && props.margin};
`;

export const Text = styled.span`
  ${(props: Props) => props.right
    ? css`margin-right: 10px;`
    : css`margin-left: 10px;`
  };
  color: ${(props: Props) => props.textColor && props.textColor};
  font-size: ${(props: Props) => props.size && `${props.size - 8}px`};
  font-family: Roboto;
  width: ${(props: Props) => props.widthLabel && `${props.widthLabel}px`};
  line-height: 20px;
`;

export const CheckMark = styled.div`
    display: inline-block;
    transform: rotate(45deg);
    height: 8px;
    width: 4px;
    border-bottom: 2px solid #FFFFFF;
    border-right: 2px solid #FFFFFF;
`;