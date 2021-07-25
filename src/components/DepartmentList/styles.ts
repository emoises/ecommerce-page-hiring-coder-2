import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  text-transform:  uppercase;
  list-style: none;

  a{ 
      text-decoration: none;
      font-weight: bold;
  }
`;
