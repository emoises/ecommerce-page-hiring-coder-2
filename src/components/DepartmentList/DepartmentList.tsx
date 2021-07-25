import React from 'react';

import { Container } from './styles';

const DepartmentList: React.FC = () => {
  const Departments = [
      "Eletrônicos",
      "Utensílios domésticos",
      "Eletrodomésticos",
      "Cozinha",
      "jardinagem",
      "Homeoffice"
  ]
    return (
  <Container>
          {
              Departments.map( (department, idx) => {
                return(
                    <li key={idx} >
                      <a href="#">
                          {department}
                      </a>
                    </li>
                )
              })
          }
  </Container>
  );
}

export default DepartmentList;