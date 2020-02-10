import * as React from 'react';
import { BannerFeature } from './banner';
import { LoginFeature } from './login';
import './styled.scss';

interface Props {
  history?: any;
}

export const StepZero: React.FC<Props> = ({ history }) => (
  <div className="stepZero">
    <BannerFeature />
    <LoginFeature history={history} />
  </div>
);
