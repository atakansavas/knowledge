import React from 'react';
import logo from './logo.svg';
import { AppContextProvider } from './contexts/layout/Index';
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Layout from './views/layout/Layout';
import Error from './views/error/Error';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          {
            /* Redirect from root URL to /dashboard. */
            <Redirect exact from="/" to="/home" />
          }
          <Route path="/error" component={Error} />

          <Layout></Layout>

        </Switch>

      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
