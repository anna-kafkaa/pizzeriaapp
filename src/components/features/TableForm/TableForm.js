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
    if (status === 'free' || status === 'cleaning') {
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
          <option value="free">Free</option>
          <option value="reserved">Reserved</option>
          <option value="busy">Busy</option>
          <option value="cleaning">Cleaning</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>People Amount</Form.Label>
        <Form.Control
          type="number"
          min="0"
          max="10"
          value={peopleAmount}
          onChange={(e) => setPeopleAmount(Math.max(0, Math.min(10, Number(e.target.value))))}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Max People Amount</Form.Label>
        <Form.Control
          type="number"
          min="0"
          max="10"
          value={maxPeopleAmount}
          onChange={(e) => setMaxPeopleAmount(Math.max(0, Math.min(10, Number(e.target.value))))}
        />
      </Form.Group>

      {status === 'busy' && (
        <Form.Group className="mb-3">
          <Form.Label>Bill ($)</Form.Label>
          <Form.Control
            type="number"
            min="0"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          />
        </Form.Group>
      )}

      <Button variant="success" type="submit">
        Update
      </Button>
    </Form>
  );
};

export default TableForm;



