import moment from 'moment';

export default ( entries, user, dates ) => {
  let filtered = entries;

  if( user.trim() !== '' ){
    filtered = entries.filter( (entry) => {
      return entry.user.toLowerCase() === user.toLowerCase();
    });
  }

  if( dates.fromDate.trim() !== '' && dates.toDate.trim() !== '' ){
    let fromDate = moment(dates.fromDate, "YYYY-MM-DD");
    let toDate = moment(dates.toDate, "YYYY-MM-DD");

    if( fromDate.isValid() && toDate.isValid() && fromDate.isSameOrBefore(toDate) ){
      filtered = filtered.filter( (entry) => {
        let momDate = moment(entry.date);
        return momDate.isSameOrAfter(fromDate) && momDate.isSameOrBefore(toDate);
      });
    }
  }

  return filtered;
}
