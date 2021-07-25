import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 450px;
  background: #f2f5f5;
  margin: 15px 10px;
  padding: 10px 0;
  box-shadow: 0 0 20px #b2b2b2;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 100%;
    height: auto;
    border-radius: 5px;
    padding: 0 25px;
  }
  .content{
    width: 100%;
    height: 140px;
    padding: 5px 25px;
  }
  .content h4,h5{
    padding: 5px 0px;
  }
  .content h6{
    padding: 5px 0px;
  }
  .content span{
    width: 100%;
  }

   button {
    width: 100px;
    position: relative;
    height: 40px;
    bottom: 0;
    background: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 0 10px #b2b2b2;
    transition: ease-in .1s;
        }
  button:hover {
    box-shadow: 0 0 10px #0094ff;   
    
  }
  button:active {
    outline: none;   
    box-shadow: 0 0 10px #0094ff;   

  }
  button:focus {
    outline: none;   
    box-shadow: 0 0 10px #0094ff;   

  }
  
`;
