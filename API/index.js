import axios from 'axios'

const apiKey = process.env.API_KEY
const url = process.env.API_HOST

const fetchData = async option => {
  try {
    const res = await axios.get(`${url}/${option}`)
    return res.data
  } catch (error) {
    console.error(error)
  }
}
const processMovieList = res => {
  return res.map(movie => ({
    id: movie.id,
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  }))
}
const processMovieDetail = movie => ({
  id: movie.id,
  title: movie.original_title,
  plot: movie.overview,
  runtime: movie.runtime,
  language: movie.original_language,
  year: movie.release_date.substring(0, 4),
  poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
})
export const getNowPlaying = async () => {
  const { results } = await fetchData(`movie/now_playing?api_key=${apiKey}`)
  return processMovieList(results)
}
export const getSearchedList = async title => {
  const { results } = await fetchData(
    `search/movie?query=${title}&api_key=${apiKey}`
  )
  return processMovieList(results)
}
export const getMovieDetail = async id => {
  const response = await fetchData(`movie/${id}?api_key=${apiKey}`)
  return processMovieDetail(response)
}
