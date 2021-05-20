import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import NotFound from './Components/NotFound/NotFound';
import OrderSummery from './Components/OrderSummery/OrderSummery';
import UserInformation from './Components/UserInformation/UserInformation';

function App() {
  return (
    <Router>
     <NavBar />
      <Switch>
        <Route path='/user-information' >
          <UserInformation />
        </Route>
        <Route path='/order-summery' >
          <OrderSummery />
        </Route>
        <Route exact  path='/' >
        <UserInformation />
        </Route>
        <Route path='*' >
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
