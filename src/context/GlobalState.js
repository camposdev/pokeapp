import React, { createContext, useReducer } from 'react';
import * as actionTypes from './actionTypes';
import { getPokemonByName } from '../services/api';
import Reducer from './Reducer';

const initialState = {
  pokemon: null,
  loading: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const { GET_POKEMON, ON_LOADING } = actionTypes;

  const onGetPokemon = async (name) => {
    const fetch = await getPokemonByName(name);

    dispatch({
      type: GET_POKEMON,
      payload: fetch.data || null,
    });
  };

  const onLoading = async (isLoading) => {
    dispatch({
      type: ON_LOADING,
      payload: isLoading,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        onGetPokemon,
        onLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
