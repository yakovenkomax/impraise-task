import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App/App';
import { apolloClient } from 'apolloClient';
import { ApolloProvider } from '@apollo/client';

import 'global.css';


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
