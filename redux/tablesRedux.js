// action type 
const EDIT_TABLE = 'app/tables/EDIT_TABLE';

// action creator 
export const editTable = (payload) => ({ type: EDIT_TABLE, payload });

// thunk 
export const updateTableRequest = (tableData) => {
  return (dispatch) => {
    const options = {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tableData),
    };

    fetch(`http://localhost:3131/api/tables/${tableData.id}`, options)
      .then((res) => {
        if (!res.ok) throw new Error('Server error while updating table');
        return res.json();
      })
      .then(() => dispatch(fetchTables())) 
      .catch((err) => console.error('Update failed:', err));
  };
};
