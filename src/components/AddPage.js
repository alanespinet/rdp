import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import moment from 'moment';

import FieldInput from './FieldInput';
import FieldTextArea from './FieldTextArea';
import MonthSelect from './MonthSelect';
import DaySelect from './DaySelect';
import YearSelect from './YearSelect';

import { startAddEntry } from '../redux/actions/actions';


class AddPage extends React.Component {

  state = {
    entry: {
      entry_id: '',
      user: '',
      date: "2018-01-01",
      weight: 0,
      comments: ''
    },
    date: {
      month: '',
      day: '',
      year: ''
    }
  }

  componentDidMount(){
    this.state.entry.entry_id = uuid();
  }


  onUserChange = (e) => {
    var user = e.target.value;
    this.state.entry.user = user;
  }

  onWeightChange = (e) => {
    var weight = e.target.value;
    this.state.entry.weight = weight;
  }

  onCommentsChange = (e) => {
    var comments = e.target.value;
    this.state.entry.comments = comments;
  }

  onMonthChange = (e) => {
    var month = e.target.value;
    this.state.date.month = month;
  }

  onDayChange = (e) => {
    var day = e.target.value;
    this.state.date.day = day;
  }

  onYearChange = (e) => {
    var year = e.target.value;
    this.state.date.year = year;
  }

  onAddEntry = () => {
    const entry = this.state.entry;
    const date = this.state.date;

    if(!entry.user || !entry.date || !entry.weight || !date.month || !date.day || !date.year)
      alert('User, Date and Weight are required fields!');
    else {
      if( this.validateDate() ){
        this.state.entry.date = moment(this.stringDate()).format("YYYY-MM-DD");
        this.props.dispatch( startAddEntry(this.state.entry) );
        this.props.history.push('/');
      } else {
        alert('Please check the date. It may be not valid!');
      }
    }
  }


  validateDate = () => {
    if(this.stringDate() === '')
      return false;

    return moment(this.stringDate(), "YYYY MM DD").isValid();
  }


  stringDate = () => {
    const date = this.state.date;
    if( !date.year || !date.month || !date.day)
      return '';

    return (date.year + " " + date.month + " " + date.day);
  }


  render(){
    return (
      <div className="addPage content-panel">
        <div className="addPageWrapper">
          <div className="addPageInputs">
            <FieldInput field_id="txtUser" labelText="User:" onChangeEvent={this.onUserChange} />
            <div className="entryDateWrapper">
              <label>Date</label>
              <div className="entryDate">
                <MonthSelect onChangeEvent={this.onMonthChange} />
                <DaySelect onChangeEvent={this.onDayChange} />
                <YearSelect onChangeEvent={this.onYearChange} />
              </div>
            </div>
            <FieldInput field_id="txtWeight" labelText="Weight:" onChangeEvent={this.onWeightChange} />
            <FieldTextArea field_id="txtComments" labelText="Comments:" onChangeEvent={this.onCommentsChange} />
          </div>

          <button className="addEntryButton" onClick={this.onAddEntry}>Add Entry</button>
        </div>
      </div>
    );
  }
}


export default connect()(AddPage);
