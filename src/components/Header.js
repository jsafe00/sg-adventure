import React from 'react';

import Container from 'components/Container';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <h1>
          SG Adventure 2022
        </h1>
        <p>
          Best Viewed on Desktop
        </p>
        <p className="header-subtitle">
          <a href="https://github.com/jsafe00/sg-adventure" target="blank"> 
            <FaGithub />
            View on Github
          </a>
        </p>
      </Container>
    </header>
  );
};

export default Header;
