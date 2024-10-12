import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import movieStore from '../../stores/MovieStore';
import Slider from '../Slider/Slider';

const TrendingMovies = observer(() => {

    useEffect(() => {
        movieStore.fetchMoviesTopRated();
    }, []);

    if (movieStore.loading) {
        return <div>Loading...</div>;
    }

    if (movieStore.error) {
        return <div>Error: {movieStore.error}</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Tendencia</h2>
            <Slider cards={movieStore.moviesTopRated}/>
        </div>
    );
});

export default TrendingMovies;