import React, {useState} from 'react';

import api from '../../services/api'
import { Container } from './styles';

interface DataProps {
  id: number,
  name: string;
  description: string;
  price: number;
  imgUrl: string;

}

interface PructCardProps{
  productItem: DataProps;
  handleProductButton: (event: any) => void;
}

const ProductCard: React.FC<PructCardProps> = ({productItem, handleProductButton}) => {

  return(
      <Container>
          <img src={productItem.imgUrl} alt="Produto" />
          <div className="content">
            <h4>{productItem.name}</h4>
            <span>{productItem.description}</span>
            <h5>R${productItem.price}</h5>
          </div>
            <button 
            type="button" 
            value={productItem.id} 
            onClick={(e) => handleProductButton(e)} >
            Comprar</button>
      </Container>
  );
}

export default ProductCard;