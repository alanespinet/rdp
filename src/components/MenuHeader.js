import React from 'react';
import { NavLink } from 'react-router-dom';


export default () => (
  <div className="menuHeader">
    <div className="per-container">
      <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
      <NavLink to="/add" activeClassName="active">Add</NavLink>
    </div>
  </div>
);
