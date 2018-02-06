const defaultState = {
  user: '',
  date: {
    fromDate: '',
    toDate: ''
  }
}

const filtersReducer = ( state = defaultState, action ) => {
  switch( action.type ){
    case 'SET_USER_FILTER':
      return {
        ...state,
        user: action.user
      };

    case 'SET_DATE_FILTER':
      return {
        ...state,
        date: {
          fromDate: action.fromDate,
          toDate: action.toDate
        }
      };

    default:
      return state;
  }
};

export default filtersReducer;
