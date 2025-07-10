// src/components/TableList/TableRow.js
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/TableRow.scss';

const TableRow = ({ id, status }) => {
  return (
    <div className="table-row d-flex justify-content-between align-items-center py-3 border-bottom">
      <div className="table-info d-flex align-items-center">
        <div className="table-name"><strong>Table {id}</strong></div>
        <div className="table-status ms-5">
          <strong>Status:</strong> <span>{status}</span>
        </div>
      </div>
      <Link to={`/table/${id}`}>
        <Button variant="primary">Show more</Button>
      </Link>
    </div>
  );
};

export default TableRow;











