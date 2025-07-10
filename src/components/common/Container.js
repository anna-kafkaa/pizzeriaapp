import React from 'react';
import { Container as BootstrapContainer } from 'react-bootstrap';
import '../../styles/Container.scss';

const Container = ({ children }) => {
  return <BootstrapContainer className="custom-container">{children}</BootstrapContainer>;
};

export default Container;


