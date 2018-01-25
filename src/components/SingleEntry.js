import React from 'React';
import moment from 'moment';

export default class SingleEntry extends React.Component {

  onHandleDelete = () => {
    this.props.onHandleDelete( this.props.entry_id );
  };

  render(){
    return (
      <div>
        <p>{this.props.user}</p>
        <p>{ moment(this.props.date).format("MMM DD, YYYY") }</p>
        <p>{this.props.weight}</p>
        <p>{this.props.comments}</p>
        <button onClick={this.onHandleDelete}>Del</button>
      </div>
    );
  }

}
