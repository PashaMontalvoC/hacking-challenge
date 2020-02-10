import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styled.scss';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { fonts } from './config';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Routes } from './config/route';

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
      <Router>
        {renderRoutes(Routes)}
      </Router>
    </Provider>
  </React.Fragment>,
  root
)
