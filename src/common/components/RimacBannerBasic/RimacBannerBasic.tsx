import * as React from 'react';
import * as rimacLogo from '../../../../assets/img/rimac-logo.png';
import './styled.scss';

export const RimacBannerBasic: React.FC = () => (
  <div className="banner">
    <div className="banner__title">
      <img src={rimacLogo} />
    </div>
    <hr className="banner__subline" />
    <img className="banner__family" />
  </div>
);
