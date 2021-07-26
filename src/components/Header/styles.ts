import styled from 'styled-components';

export const Container = styled.div`
    height: 140px;
    background: #fff;
    .container-search{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        form {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: row;
            justify-content: safe;
        }
        form input{
            align-items:center;
            justify-content: flex-start;
            margin-left: 50px;
            padding-left: 15px;
            width: 50vw;
            height: 60px;
            border-radius: 5px;
            border: none;
            background: #fff;
            outline: none ;
            /* outline-style: ridge #0094ff; */
            font-size: 1.2rem;
            color: #006499;
            box-shadow: 0 0 10px #b2b2b2;
            transition: ease-in .2s
        }
        form input:focus{
            outline-style: none;
            /* outline: 2px solid #0094ff; */
            box-shadow: 0 0 10px #0094ff;
        }
        form button {
            width: 100px;
            margin-left: 20px;
            background: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0 0 10px #b2b2b2;
            transition: ease-in .3s;
        }
        form button:hover {
            box-shadow: 0 0 10px #0094ff;   
            
        }
        form button:focus {
            outline: none;   
            box-shadow: 0 0 10px #0094ff;   

        }
    }

    #logo{
        margin: 10px 50px 10px 50px;
        border-radius: 5px;
        box-shadow: 0px 0px 10px #b2b2b2;
    }

    .logo{
        width: 100px;
        height  : 100px;
        padding: 10px;
        background: #000
    }

    .cart{
        width: 60px;
        height: 60px;
        margin: auto 0 auto auto;
        padding: 5px;
        cursor: pointer;
        border-radius: 5px;
        color: #006499;
    }
    .cart:hover{
       background: rgba(0,0,0,.1)
    }
    .cart-count{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        margin: auto 40px 0 -10px;
        border-radius: 50%;
        background: red;
        font-weight: bold;
    }
`