import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { store } from 'store';
import AuthLayout from 'pages/_layouts/auth';
import DefaultLayout from 'pages/_layouts/default';

interface RouteWrapperProps extends RouteProps {
  component: any;
  isPrivate?: boolean;
}

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}: RouteWrapperProps) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
