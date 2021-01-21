import React, { useContext } from 'react';
import { Container, Pokemon, SearchBar } from '../components';
import { GlobalContext } from '../context/GlobalState';

const Home = () => {
  const { pokemon } = useContext(GlobalContext);

  return (
    <Container>
      <SearchBar />

      {pokemon ? <Pokemon data={pokemon} /> : null}
    </Container>
  );
};

export default Home;
