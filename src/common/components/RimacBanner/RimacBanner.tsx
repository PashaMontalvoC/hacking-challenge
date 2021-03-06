import * as React from 'react';
import * as rimacLogo from '../../../../assets/img/rimac-logo.png';
import './styled.scss';

interface Props {
  children?: React.ReactNode;
}

export const RimacBanner: React.FC<Props> = ({ children }) => (
  <div className="banner">
    <div className="banner__title">
      <img src={rimacLogo} />
    </div>
    <hr className="banner__subline" />
    {children}
    <img className="banner__family" />
  </div>
);
