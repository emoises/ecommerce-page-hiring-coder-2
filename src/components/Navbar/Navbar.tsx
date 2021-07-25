import React from 'react';
import DepartmentList from '../DepartmentList/DepartmentList';

import { Container } from './styles';

const Navbar: React.FC = () => {
  return( 
  <Container>
    <DepartmentList />
  </Container>
  );
}

export default Navbar;