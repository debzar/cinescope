import React from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import PopularMovies from './components/PopularMovies/PopularMovies';
import TrendingMovies from './components/TrendingMovies/TrendingMovies';
const App = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <PopularMovies/>
    <TrendingMovies/>
    </>
  );
};

export default App;