import { useSelector } from 'react-redux';
import TableRow from './TableRow';
import Container from '../common/Container';


const TableList = () => {
  const tables = useSelector(state => state.tables);

  return (
    <Container>
      <div className="table-list">
        <h1 className="mb-4">All Tables</h1>
        {tables.map(table => (
          <TableRow key={table.id} {...table} />
        ))}
      </div>
    </Container>
  );
};

export default TableList;


