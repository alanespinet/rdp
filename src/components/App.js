import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './MainPage';
import AddPage from './AddPage';
import NotFoundPage from './NotFoundPage';
import MenuHeader from './MenuHeader';
import Footer from './Footer';


export default class App extends React.Component {

  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <MenuHeader />
            <Switch>
              <Route path="/" component={MainPage} exact={true} />
              <Route path="/add" component={AddPage} />
              <Route component={NotFoundPage} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
