export const addEntry = ( entry ) => ({
  type: 'ADD_ENTRY',
  entry
});

export const deleteEntry = ( id ) => ({
  type: 'DELETE_ENTRY',
  id
});

export const getEntry = ( id ) => ({
  type: 'GET_ENTRY',
  id
});
