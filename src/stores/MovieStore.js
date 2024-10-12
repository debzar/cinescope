import { makeAutoObservable, Observable } from 'mobx';
import api from '../services/api';

class MovieStore {
  moviesPopular = [];
  moviesTopRated = [];
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchMovies = async () => {
    this.loading = true;
    try {
      const response = await api.get('/movie/popular');
      this.moviesPopular = response.data.results;
    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  };

  fetchMoviesTopRated = async () => {
    this.loading = true;
    try {
      const response = await api.get('/movie/top_rated');
      this.moviesTopRated = response.data.results;
    } catch (err) {
      this.error = err.message;
    } finally {
      this.loading = false;
    }
  };


}

const movieStore = new MovieStore();


export default movieStore;