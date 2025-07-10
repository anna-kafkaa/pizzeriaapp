import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TableForm from '../features/TableForm/TableForm';
import Container from '../common/Container';
import '../../styles/Table.scss';

const Table = () => {
  const { id } = useParams();
  const table = useSelector(state => state.tables.find(table => table.id === id));

  if (!table) return <Navigate to="/" />;

  return (
    <Container>
      <h1 className="mb-4">Edit Table {id}</h1>
      <TableForm tableData={table} />
    </Container>
  );
};

export default Table;

