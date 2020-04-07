import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/Route/PrivateRoute';
import PublicRoute from './components/Route/PublicRoute';
import Login from './components/Login/Login'
import UploadImg from './components/Upload'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={false} component={Login} path="/" exact />
        <PrivateRoute component={UploadImg} path="/dashboard" exact />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
