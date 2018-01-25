import React from 'react';
import EntriesList from './EntriesList';


export default class MainPage extends React.Component {

  render(){
    return (
      <div>
        <h1> Main Page </h1>
        <EntriesList />
      </div>
    );
  }
}
