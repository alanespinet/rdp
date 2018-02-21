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
      <div className="entriesList">
        <table>
          <thead>
            <tr className="headersRow">
              <th className="nameColumn">Name</th>
              <th className="dateColumn">Date</th>
              <th className="weightColumn">Weight</th>
              <th className="commentsColumn">Comments</th>
              <th className="deleteColumn">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  entries: EntriesSelector( state.entriesReducer.entries, state.filtersReducer.user, state.filtersReducer.date )
});

export default connect(mapStateToProps)(EntriesList);
