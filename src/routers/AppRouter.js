import React                                      from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LoginScreen }     from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
  return (
      <Router>
        <div>
          {/*Switch condiciona o enlaza el componente con el url asignado*/}
          <Switch>
            <Route exact path="/login" component={LoginScreen}/>
            <Route path="/" component={DashboardRoutes}/>
          </Switch>
        </div>
      </Router>
  );
};