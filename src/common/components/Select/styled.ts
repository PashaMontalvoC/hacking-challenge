import styled, { css } from 'styled-components';

interface Props {
  disabled?: boolean;
  width?: string;
  fullWidth?: boolean;
  visible?: boolean;
  selected?: boolean;
}

export const Mask = styled.div`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  z-index: 4;
  cursor: pointer;
`;

export const Text = styled.span`
  font-size: 16px;
  font-family: Lato;
  color: #494F66;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  overflow: hidden;
`;

export const ArrowIcon = styled.span`
  &:before {
    border-style: solid;
    border-width: 2px 2px 0 0;
    content: '';
    display: inline-block;
    height: 7px;
    left: 2px;
    position: relative;
    top: 2px;
    transform: rotate(135deg);
    vertical-align: top;
    width: 7px;
    color: #EF3340;
  }
`;

export const OptionMaskWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-height: 135px;
  overflow-x: hidden;
  border: 2px solid #C5CBE0;
  border-radius: 4px;
  z-index: 9;
  display: ${(props: Props) => props.visible ? 'block' : 'none'};
  background: #fff;
  padding: 8px;
  box-shadow: 0px 0px 8px #C5CBE0;
  position: absolute;
`;

export const OptionList = styled.span`
  height: 24px;
  width: 100%;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: Lato;
  font-size: 16px;
  color: #494F66;
  &:hover {
    background: #4389F3;
    color: #FFFFFF;
  }
  cursor: pointer;
  ${(props: Props) => props.selected && css`
    background: #A3ABCC;
    color: #FFFFFF;
  `}
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  overflow: hidden;
  padding: 0 8px;
`;

export const SelectHidden = styled.select`
  display: none;
`;

export const Wrapper = styled.div`
  width: ${(props: Props) => props.fullWidth ? '100%' : props.width};
  background: #fff;
  height: 56px;
  position: relative;
  ${(props: Props) => props.disabled && css`
    pointer-events: none;
      ${Mask} {
        opacity: 0.3;
      }
    ${ArrowIcon} {
      opacity: 0.3;
    }
  `}
`;
