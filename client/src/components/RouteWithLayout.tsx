import React from "react";
import { RouteComponentProps, Route, RouteProps } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

interface RouteWithLayoutProps extends RouteProps {
  path?: string | string[];
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  allowAnonymous?: boolean;
  exact?: boolean;
  strict?: boolean;
  sensitive?: boolean;
}

function RouteWithLayout(props: RouteWithLayoutProps) {
  const getComponent = (routerContext: RouteComponentProps<{}>): JSX.Element => {
    let Component = props.component;

    if (Component == null) {
      throw new Error('\'component\' prop must be set!');
    }

    // Render the layout with the component. It is passed the routerContext, which contains some really nice page level information
    return (
      <MainLayout {...routerContext}>
        <Component {...routerContext} key={window.location.href} />
      </MainLayout>
    );
  }

  // You must absolutely return a <Route> tag for the router to work
  return <Route key="routeKey"
    exact={props.exact}
    strict={props.strict}
    sensitive={props.sensitive}
    path={props.path}
    render={routerContext => getComponent(routerContext)} />;
}

export default RouteWithLayout;
