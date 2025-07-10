// src/components/TableList/TableRow.js
import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const TableRow = ({ id, status, peopleAmount, maxPeopleAmount }) => {
  return (
    // Zmieniamy ten div, dodając klasy Bootstrapa dla wyglądu karty
    // mb-3: margin-bottom (odstęp między kartami)
    // p-3: padding (wewnętrzny odstęp)
    // bg-white: białe tło
    // shadow-sm: delikatny cień
    // rounded: zaokrąglone rogi (opcjonalnie, jeśli chcesz)
    <div className="d-flex justify-content-between align-items-center mb-3 p-3 bg-white shadow-sm rounded">
      <div>
        <h3 className="mb-0">Table {id}</h3> {/* mb-0 usuwa dolny margines dla h3 */}
        <p className="mb-0">Status: {status}</p> {/* mb-0 usuwa dolny margines dla p */}
      </div>
      <Button as={NavLink} to={`/table/${id}`} variant="primary">Show more</Button>
    </div>
  );
};

TableRow.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  peopleAmount: PropTypes.number.isRequired,
  maxPeopleAmount: PropTypes.number.isRequired,
};

export default TableRow;





