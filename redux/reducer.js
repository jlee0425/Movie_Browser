export default (state = { favorites: [] }, action) => {
  const favorites = state.favorites || []
  switch (action.type) {
    case 'ADD_FAV':
      return { ...state, favorites: [...favorites, action.payload] }
    case 'DEL_FAV':
      return {
        ...state,
        favorites: favorites.filter(movie => movie.id !== action.payload)
      }
    default:
      return state
  }
}
