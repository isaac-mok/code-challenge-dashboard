import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import route from './routes';
import Header from './Components/Header';

function App() {
  const [isShown, setIsShown] = useState(false)

  return (
    <div className="flex h-full">
      <Sidebar isShown={isShown} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={() => { setIsShown(isShown => !isShown) }} />
        <Switch>
          <Route exact path={route.dashboard}>
            <Dashboard />
          </Route>
          <Route exact path={route.customers}>Customers</Route>
          <Route exact path={route.message}>Message</Route>
          <Route exact path={route.help}>Help</Route>
          <Route exact path={route.settings}>Settings</Route>
          <Route exact path={route.password}>Password</Route>
          <Route exact path={route.signout}>Sign Out</Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
