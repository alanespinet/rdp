import { database } from '../../firebase/firebase';
const entriesdb = database.ref().child('entries');


const addEntry = ( entry ) => ({
  type: 'ADD_ENTRY',
  entry
});

export const startAddEntry = (entry) => {
  return (dispatch) => {

    const entry_id = entry.entry_id;
    const entry_obj = {
      user: entry.user,
      date: entry.date,
      weight: entry.weight,
      comments: entry.comments
    };

    entriesdb.child(entry_id).set(entry_obj)
      .then( () => {
        dispatch( addEntry({
          entry_id,
          ...entry_obj
        }) );
      });
  }
}



const deleteEntry = ( id ) => ({
  type: 'DELETE_ENTRY',
  id
});

export const startDeleteEntry = ( id ) => {
  return (dispatch) => {
    entriesdb.child(id).set(null)
      .then( () => {
        dispatch( deleteEntry(id) );
      } );
  }
};


const setEntries = ( entries ) => ({
  type: 'SET_ENTRIES',
  entries
});


export const startSetEntries = () => {
  return (dispatch) => {
    return entriesdb.once('value')
      .then( (snapshot) => {
        let entries = [];
        snapshot.forEach( (childSnapshot) => {
          entries.push({
            entry_id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch( setEntries(entries) );
      });
  };
};



export const getEntry = ( id ) => ({
  type: 'GET_ENTRY',
  id
});

export const setUserFilter = ( user ) => ({
  type: 'SET_USER_FILTER',
  user
});

export const setDateFilter = ( fromDate, toDate ) => ({
  type: 'SET_DATE_FILTER',
  fromDate,
  toDate
});
