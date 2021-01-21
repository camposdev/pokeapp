import React from 'react';
import styled from 'styled-components';

const Pokemon = ({ data }) => {
  const { name, sprites } = data;

  const photo =
    sprites.other['official-artwork'].front_default || sprites.front_default;

  return (
    <S.Wrapper>
      <S.Title>{name}</S.Title>

      <S.Photo src={photo} alt={name} />
    </S.Wrapper>
  );
};

const S = {};

S.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

S.Title = styled.h2`
  font-size: 6rem;
  text-align: center;
  font-weight: 800;
  font-style: italic;
  margin: 0;
  letter-spacing: 3px;
  color: white;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
`;

S.Photo = styled.img`
  width: 300px;
`;

export default Pokemon;
