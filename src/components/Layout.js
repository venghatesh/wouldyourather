import React from 'react';

import styled from 'styled-components';


const Layout = ({ children }) => (
  <Container>
      {children}
  </Container>
);

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  padding: 0em 2em;
  max-width: 480px;
`;

Layout.propTypes = {};

export default Layout;
