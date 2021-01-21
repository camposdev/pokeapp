import * as actionTypes from './actionTypes';

const { GET_POKEMON, ON_LOADING } = actionTypes;

export default (state, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };
    case ON_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
