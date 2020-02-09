import * as React from 'react';
import { App } from '../../view';
import { StepZero } from '../../view/stepZero';
import { StepOne } from '../../view/stepOne';

const NotFound:React.SFC<{}> = ()=><div>Not found</div>;

export const Routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: StepZero,
        exact: true,
        alias: 'stepZero'
      },
      {
        path: '/salud',
        component: StepOne,
        exact: true,
        alias: 'StepOne'
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];