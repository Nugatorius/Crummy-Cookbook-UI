const INITIAL_STATE ={ 
  genres: [],
  loading: true,
  searchedGenres: []
};

const isGenreIncluded = (genre, text) => {
  return  genre.original_title.includes(text);
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case 'GENRE_FETCH_SUCCESS':
    return {...state, genres: action.payload.data.results, loading: false};
  case 'GENRE_START':
    return {...state, loading: true};
  case 'GENRE_SEARCH':
    return { ...state, searchedGenres: (action.payload === '' ? state.genres : state.genres.filter((genre) => isGenreIncluded(genre, action.payload)))};
  default:
    return state; 
  }
};
