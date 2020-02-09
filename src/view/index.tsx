import * as React from 'react';
import { renderRoutes } from 'react-router-config';

interface Props {
    route?: any;
}

export const App: React.FC<Props> = (props) => (
    <React.Fragment>
        {renderRoutes(props.route.routes)}
    </React.Fragment>
);