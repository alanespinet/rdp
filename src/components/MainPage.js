import React from 'react';

import EntriesList from './EntriesList';
import FilterBlock from './FilterBlock';



export default class MainPage extends React.Component {

  render(){
    return (
      <div className="mainPage content-panel">
        <div className="per-container">
          <EntriesList />
          <FilterBlock />
        </div>
      </div>
    );
  }
}
