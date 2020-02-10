import * as React from 'react';
import * as rimacLogo from '../../../../assets/img/rimac-logo.png';
import './styled.scss';

export const RimacBannerBasic: React.FC = () => (
  <div className="bannerBasic">
    <div className="bannerBasic__title">
      <img src={rimacLogo} />
    </div>
    <hr className="bannerBasic__subline" />
    <img className="bannerBasic__family" />
  </div>
);
