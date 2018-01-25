import React from 'react';

export default (props) => (
  <div>
    <label htmlFor="txtYear">Day:</label>
    <select id="txtYear" onChange={props.onChangeEvent}>
      <option></option>
      {Array.from(new Array(30),(val,index)=>index + 1970).map( (element) =>
        <option key={element}>{element}</option>
      )}
    </select>
  </div>
);
