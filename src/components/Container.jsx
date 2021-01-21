import React from 'react';
import styled from 'styled-components';

const Container = (props) => <S.Container {...props} />;

const S = {};

S.Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export default Container;
