import React from 'react';

export default (props) => (
  <div>
    <label htmlFor="txtDay">Day:</label>
    <select id="txtDay" onChange={props.onChangeEvent}>
      <option></option>
      {Array.from(new Array(31),(val,index)=>index + 1).map( (element) =>
        <option key={element}>{element}</option>
      )}
    </select>
  </div>
);
