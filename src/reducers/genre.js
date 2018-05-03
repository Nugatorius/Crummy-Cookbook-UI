const INITIAL_STATE ={ 
  genres: {},
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case 'GENRE_FETCH_SUCCESS':
    return {...state, genres: action.payload, loading: false};
  case 'GENRE_START':
    return {...state, loading: true};
  default:
    return state; 
  }
};
