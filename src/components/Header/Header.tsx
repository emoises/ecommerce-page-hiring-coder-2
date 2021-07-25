import React from 'react';
import Navbar from '../Navbar/Navbar';

import logo from '../../assets/logo.svg'
import cart from '../../assets/shopping-cart.svg'
import { Container } from './styles';

interface HeaderProps {
  cartCount: number;
}
const Header: React.FC<HeaderProps> = ({cartCount}) => {
  return (
  <Container>
    <div className="container-search">
      <img id="logo" src={logo} alt="logo"  style={{width: "80px", height:"80px"}}/>
      <form action="submit">
        <input type="text" />
        <button type='submit' >Pesquisar</button>
        <img src={cart} className="cart" alt="Carrinho de compras"  />
        {cartCount > 0 ? <div className="cart-count"><span>{cartCount}</span></div> : ""}
      </form>
    </div>
    <Navbar/>  
  </Container>);
}

export default Header;