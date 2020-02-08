import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styled.scss';
import { StepZero } from './view/stepZero';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { fonts } from './config';
import { createGlobalStyle } from 'styled-components';

const store = configureStore();
const GlobalStyle = createGlobalStyle`
  ${fonts}
`;

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(
    <React.Fragment>
        <GlobalStyle />
        <Provider store={store}>
            <StepZero />
        </Provider>
    </React.Fragment>,
    root
)