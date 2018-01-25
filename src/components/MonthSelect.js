import React from 'react';

export default (props) => (
  <div>
    <label htmlFor="txtMonth">Month:</label>
    <select id="txtMonth" onChange={props.onChangeEvent}>
      <option></option>
      {Array.from(new Array(12),(val,index)=>index + 1).map( (element) =>
        <option key={element}>{element}</option>
      )}
    </select>
  </div>
);
