import React from 'react';
import moment from 'moment';

export default class SingleEntry extends React.Component {

  onHandleDelete = () => {
    this.props.onHandleDelete( this.props.entry_id );
  };

  render(){
    return (
      <tr className="singleEntry">
        <td className="singleEntryUser"><p>{this.props.user}</p></td>
        <td><p>{ moment(this.props.date).format("MMM DD, YYYY") }</p></td>
        <td><p>{this.props.weight} lbs</p></td>
        <td><p>{this.props.comments}</p></td>
        <td><button onClick={this.onHandleDelete}>Del</button></td>
      </tr>
    );
  }

}
