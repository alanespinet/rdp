import React from 'react';
import { connect } from 'react-redux';

import SingleEntry from './SingleEntry';
import { deleteEntry } from '../redux/actions/actions';

class EntriesList extends React.Component {

  onHandleDelete = (id) => {
    this.props.dispatch( deleteEntry(id) );
  };


  render(){

    return (
      <div>
        { this.props.entries.map( entry =>
          <SingleEntry
            key={entry.entry_id}
            entry_id={entry.entry_id}
            user={entry.user}
            date={entry.date}
            comments={entry.comments}
            onHandleDelete={this.onHandleDelete}
          />) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  entries: state.entriesReducer.entries
});

export default connect(mapStateToProps)(EntriesList);
