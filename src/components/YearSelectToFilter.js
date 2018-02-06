import React from 'react';

export default (props) => (
  <div>
    <label htmlFor="txtYear">Year:</label>
    <select id="txtYear" onChange={props.onChangeEvent}>
      <option></option>
      {Array.from(new Array(30),(val,index)=>index + (new Date()).getFullYear() -29 ).map( (element) =>
        <option key={element}>{element}</option>
      )}
    </select>
  </div>
);
