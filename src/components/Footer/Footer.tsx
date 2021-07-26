import React from 'react';

import { Container } from './styles';

import github from '../../assets/github-icon.png'
import linkedin from '../../assets/linkedin-icon.png'

const Footer: React.FC = () => {
  return (
    <Container>
        <a href="https://github.com/emoises/ecommerce-page-hiring-coder-2" target="_blank">
            <img src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/eduardomoises/" target="_blank" >
            <img src={linkedin} alt="linkedin" />
        </a>

    </Container>
    );
}

export default Footer;