import TableRow from '../TableList/TableRow';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../redux/tablesRedux';
import '../../styles/TableList.scss';
import Loading from '../common/Loading';

const TableList = () => {
  const tables = useSelector(getAllTables);

  if (!tables || tables.length === 0) {
    return <Loading />;
  }

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



