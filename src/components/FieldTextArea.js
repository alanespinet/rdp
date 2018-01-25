import React from 'react';

export default (props) => (
  <div>
    <label htmlFor={props.field_id}>{props.labelText}</label>
    <textarea id={props.field_id} onChange={props.onChangeEvent}></textarea>
  </div>
);
