import React, {useEffect, useState, useMemo} from 'react';

import Header from "../../components/Header/Header";

import ProductCard from '../../components/ProductCard/ProductCard';
import api from '../../services/api'

import { Container } from './styles';

interface DataProps {
  id: number,
  name: string;
  description: string;
  price: number;
  imgUrl: string;

}

interface CartCountProps {
  handleCartCount: () => void
}

const Home: React.FC<CartCountProps> = ({handleCartCount}) => {
  const [ data, setData] = useState<DataProps[]>([]);
  const [ cart, setCart] = useState<DataProps[]>([]);

  const getStoragedCart = async () => {
    const teste: string = localStorage.getItem('@cart') || '[]'
    let storagedCart: DataProps[] = await JSON.parse(teste)
    console.log("Olha o cart. Era isso?",cart.length)
    setCart([...storagedCart])
    return storagedCart
  }
  useEffect( () => {
    getStoragedCart()
  }, [])
  useEffect( () => {
    api.get('').then( response => {
      setData(response.data)
    })

  },[])

  const handleProductButton = (e: any) => {
    const id = e.target.value

    api.get(`/${id}`).then( response => {
      setCart([
        ...cart,
        response.data
      ])
      localStorage.setItem(`@cart`, JSON.stringify(cart))
    })
  }
  console.log(cart)

  return (
    <>
      <Header cartCount={cart.length} />

        <Container>
            {
            data.map( product => (
              product.imgUrl && 
              <ProductCard 
              key={product.id} 
              productItem={product}
              handleProductButton={handleProductButton}
              />) )
            }
        </Container>
    </>
  );
}

export default Home;