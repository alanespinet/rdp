import React from 'react';

export default (props) => (
  <div>
    <label htmlFor={props.field_id}>{props.labelText}</label>
    <input type="text" id={props.field_id} onChange={props.onChangeEvent} />
  </div>
);
