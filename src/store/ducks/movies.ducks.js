import { createActions, createReducer } from 'reduxsauce';

export const { Types: MoviesTypes, Creators: MoviesActions } = createActions({
  moviesRequest: [],
  moviesRequestSuccess: ['payload'],
  moviesRequestFailure: ['error'],
});

const INITIAL_STATE = {
  moviesData: [],
  isLoading: false,
  requestError: '',
};

const moviesRequest = () => ({
  isLoading: true,
});

const moviesRequestSuccess = (state, { payload }) => ({
  ...state,
  moviesData: payload,
  isLoading: false,
});

const moviesRequestFailure = (state, { error }) => ({
  isLoading: false,
  requestError: error,
});

export default createReducer(INITIAL_STATE, {
  [MoviesTypes.CART_REQUEST]: moviesRequest,
  [MoviesTypes.CART_SUCCESS]: moviesRequestSuccess,
  [MoviesTypes.CART_FAILURE]: moviesRequestFailure,
});
