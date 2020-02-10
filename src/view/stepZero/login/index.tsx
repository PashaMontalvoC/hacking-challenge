import { Login } from './components/Login';
import * as React from 'react';

interface Props {
  history?: any;
}

export const LoginFeature: React.FC<Props> = ({ history }) => (
  <Login history={history} />
);
