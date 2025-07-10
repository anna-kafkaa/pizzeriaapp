import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateTableRequest } from '../../../redux/tablesRedux';
import { Form, Button } from 'react-bootstrap';
import '../../../styles/TableForm.scss';

const TableForm = ({ tableData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [status, setStatus] = useState(tableData.status);
  const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount);
  const [bill, setBill] = useState(tableData.bill);

  useEffect(() => {
    if (status.toLowerCase() === 'free' || status.toLowerCase() === 'cleaning') {
      setPeopleAmount(0);
      setBill(0);
    }
  }, [status]);

  useEffect(() => {
    if (peopleAmount > maxPeopleAmount) {
      setPeopleAmount(maxPeopleAmount);
    }
  }, [maxPeopleAmount, peopleAmount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateTableRequest({
        id: tableData.id,
        status,
        peopleAmount: Number(peopleAmount),
        maxPeopleAmount: Number(maxPeopleAmount),
        bill: Number(bill),
      })
    );
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit} className="table-form">
      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Free">Free</option>
          <option value="Reserved">Reserved</option>
          <option value="Busy">Busy</option>
          <option value="Cleaning">Cleaning</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3 d-flex align-items-center">
        <Form.Label className="me-2 mb-0">People:</Form.Label>
        <Form.Control
          type="number"
          min="0"
          max="10"
          value={peopleAmount}
          onChange={(e) =>
            setPeopleAmount(Math.max(0, Math.min(10, Number(e.target.value))))
          }
          style={{ width: '60px', marginRight: '5px' }}
        />
        <span className="mx-1">/</span>
        <Form.Control
          type="number"
          min="0"
          max="10"
          value={maxPeopleAmount}
          onChange={(e) =>
            setMaxPeopleAmount(Math.max(0, Math.min(10, Number(e.target.value))))
          }
          style={{ width: '60px' }}
        />
      </Form.Group>

      <Form.Group className="mb-3 d-flex align-items-center">
        <Form.Label className="me-2 mb-0">Bill:</Form.Label>
        <span className="me-1">$</span>
        <Form.Control
          type="number"
          min="0"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          style={{ width: '100px' }}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
};

export default TableForm;





