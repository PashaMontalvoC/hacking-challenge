import * as React from 'react';
import * as buttonIcon from '../../../../assets/img/icon_Back.png';
import { Wrapper, Text, Icon } from './styled';
import { steps } from './constants';

interface Props {
  stepNumber?: number;
  handleClick?: Function;
}

export const BreadCrumb: React.FC<Props> = ({ stepNumber, handleClick }) => (
  <Wrapper>
    <Icon src={buttonIcon} onClick={() => handleClick()} />
    <Text>{steps[stepNumber - 1]}<span> DE 7</span></Text>
  </Wrapper>
);
