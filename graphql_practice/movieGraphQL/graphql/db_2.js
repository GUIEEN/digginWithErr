export var movies = [
  {
    id: 1,
    name: 'Seung Kwak',
    score: 15
  },
  {
    id: 2,
    name: 'aaa',
    score: 152
  },
  {
    id: 3,
    name: 'bbb',
    score: 153
  },
  {
    id: 4,
    name: 'ccc',
    score: 154
  }
]

export const getMovies = () => movies

export const getById = id => {
  console.log(id)
  const filteredMovies = movies.filter(aMovie => aMovie.id === id)
  console.log(filteredMovies)
  return filteredMovies[0]
}

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter(movie => movie.id !== id)
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies
    return true
  } else {
    return false
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: Math.ceil(Math.random() * 100),
    name,
    score
  }
  movies.push(newMovie)

  return newMovie
}
