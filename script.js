const numberOfFilms = +prompt('сколько филмов выуже смотрели ?', '')
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('один из последних просмотренных фильмов?', ''),
      b = prompt ( 'насколько оцените его ?'),
      c = prompt ('один из последних просмотренных фильмов?', ''),
      d = prompt ( 'насколько оцените его ?');

personalMovieDB.movies[a] = b; 
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
