// SELECTORS
export const getAllTables = (state) => state.tables;

// ACTION TYPES
const createActionName = (name) => `app/tables/${name}`;
const EDIT_TABLE = createActionName('EDIT_TABLE');
const FETCH_TABLES = createActionName('FETCH_TABLES');

// ACTION CREATORS
export const editTable = (payload) => ({ type: EDIT_TABLE, payload });
export const fetchTablesSuccess = (payload) => ({ type: FETCH_TABLES, payload });

// THUNKS
export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then((res) => {
        if (!res.ok) throw new Error('Error fetching tables');
        return res.json();
      })
      .then((data) => dispatch(fetchTablesSuccess(data)))
      .catch((err) => console.error('Fetch failed:', err));
  };
};

export const updateTableRequest = (tableData) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
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

// REDUCER
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case FETCH_TABLES:
      return [...action.payload];
    case EDIT_TABLE:
      return statePart.map((table) =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      );
    default:
      return statePart;
  }
};

export default tablesReducer;



