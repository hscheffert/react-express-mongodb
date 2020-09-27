import React from 'react';
import { Switch } from 'react-router';
import RouteWithLayout from './components/RouteWithLayout';
import Routes from './constants/Routes';
import Home from './pages/Home';
import UserAddEdit from './pages/users/UserAddEdit';
import './styles/App.scss';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="app">
      <Switch>
        <RouteWithLayout exact path={Routes.Home} component={Home}></RouteWithLayout>
        <RouteWithLayout path={Routes.UserAddEdit} component={UserAddEdit}></RouteWithLayout>

      </Switch>
    </div>
  );
}

export default App;
