import * as React from 'react';
import { Banner } from './banner/components/Banner';
import { PersonForm } from './form/components/PersonForm';
import './styled.scss';

interface Props {
  history?: any;
}

export const StepOne: React.FC<Props> = ({ history }) => (
  <div className="stepOne">
    <Banner />
    <PersonForm history={history} />
  </div>
);
