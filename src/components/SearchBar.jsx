import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { palette } from 'styled-tools';
import { GlobalContext } from '../context/GlobalState';

const SearchBar = () => {
  const [term, setTerm] = useState('');

  const { onGetPokemon, onLoading } = useContext(GlobalContext);

  const resetForm = () => {
    setTerm('');
  };

  const handdleSubmit = async (e) => {
    e.preventDefault();
    onLoading(true);
    try {
      await onGetPokemon(term);
      onLoading(false);
      resetForm();
    } catch (err) {
      console.error(err);
    } finally {
      onLoading(false);
      resetForm();
    }
  };

  return (
    <S.Wrapper onSubmit={handdleSubmit}>
      <S.Input
        placeholder="Type and press enter"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </S.Wrapper>
  );
};

const S = {};

S.Wrapper = styled.form`
  display: flex;
  justify-content: center;
`;

S.Input = styled.input`
  width: 100%;
  max-width: 400px;
  background-color: ${palette('light')};
  border-radius: 8px;
  border: 0;
  height: 50px;
  padding: 0 12px;
  font-size: 2rem;
  text-align: center;
  color: ${palette('dark')};
  outline: none;
  opacity: 0.8;
  transition: all 0.3s ease;
  &:focus {
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.5);
    opacity: 1;
  }
`;

export default SearchBar;
