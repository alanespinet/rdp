import React from 'react';
import { connect } from 'react-redux';

import SingleEntry from './SingleEntry';
import { startDeleteEntry } from '../redux/actions/actions';
import EntriesSelector from '../redux/selectors/entries';


class EntriesList extends React.Component {

  onHandleDelete = (id) => {
    this.props.dispatch( startDeleteEntry(id) );
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
            weight={entry.weight}
            comments={entry.comments}
            onHandleDelete={this.onHandleDelete}
          />) }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  entries: EntriesSelector( state.entriesReducer.entries, state.filtersReducer.user, state.filtersReducer.date )
});

export default connect(mapStateToProps)(EntriesList);
