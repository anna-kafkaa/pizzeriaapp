// src/components/TableList/TableList.js
import TableRow from '../TableList/TableRow';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../redux/tablesRedux';
import '../../styles/TableList.scss';

const TableList = () => {
  const tables = useSelector(getAllTables);

  return (
    <div className="table-list">
      <h2>All tables</h2>
      {tables.map(table => (
        <TableRow key={table.id} {...table} />
      ))}
    </div>
  );
};

export default TableList;


