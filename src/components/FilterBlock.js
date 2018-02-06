import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import YearSelectToFilter from './YearSelectToFilter';
import MonthSelect from './MonthSelect';
import DaySelect from './DaySelect';

import { setUserFilter, setDateFilter } from '../redux/actions/actions';


class FilterBlock extends React.Component {

  state = {
    user: '',
    fromDate: {
      year: '',
      month: '',
      day: ''
    },
    toDate: {
      year: '',
      month: '',
      day: ''
    }
  };

  onChangeUser = (e) => {
    let u = e.target.value;
    this.state.user = u;
  };

  onChangeFromYear = (e) => {
    let fy = e.target.value;
    this.state.fromDate.year = fy;
  };

  onChangeFromMonth = (e) => {
    let fm = e.target.value;
    this.state.fromDate.month = fm;
  };

  onChangeFromDay = (e) => {
    let fd = e.target.value;
    this.state.fromDate.day = fd;
  };

  onChangeToYear = (e) => {
    let fy = e.target.value;
    this.state.toDate.year = fy;
  };

  onChangeToMonth = (e) => {
    let fm = e.target.value;
    this.state.toDate.month = fm;
  };

  onChangeToDay = (e) => {
    let fd = e.target.value;
    this.state.toDate.day = fd;
  };

  doFilter = (e) => {
    e.preventDefault();

    let fromDate = this.dateToString( this.state.fromDate );
    let toDate = this.dateToString( this.state.toDate );

    this.props.dispatch( setUserFilter( this.state.user ) );
    this.props.dispatch( setDateFilter( fromDate, toDate ) );
  }

  removeFilter = (e) => {
    e.preventDefault();

    this.state.user = '';
    this.state.fromDate = { year: '', month: '', day: '' };
    this.state.toDate = { year: '', month: '', day: '' };

    document.getElementById('filterBlockForm').reset();
    this.doFilter(e);
  }


  dateToString = ( date ) => {
    return date.year + '-' + date.month + '-' + date.day;
  }


  render(){
    return (
      <div>
        <h3>User:</h3>
        <form id="filterBlockForm">
          <input type="text" id="txt-filter-user" name="txtFilterUser" onChange={this.onChangeUser}/>

          <MonthSelect onChangeEvent={this.onChangeFromMonth}/>
          <DaySelect onChangeEvent={this.onChangeFromDay}/>
          <YearSelectToFilter onChangeEvent={this.onChangeFromYear}/>

          <MonthSelect onChangeEvent={this.onChangeToMonth}/>
          <DaySelect onChangeEvent={this.onChangeToDay}/>
          <YearSelectToFilter onChangeEvent={this.onChangeToYear}/>

          <button onClick={this.doFilter}>Filter</button>
          <button onClick={this.removeFilter}>Remove Filter</button>
        </form>
      </div>
    );
  }

}


export default connect()(FilterBlock);
