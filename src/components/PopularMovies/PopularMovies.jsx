import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import movieStore from '../../stores/MovieStore';
import Slider from '../Slider/Slider';

const PopularMovies = observer(() => {

    useEffect(() => {
        movieStore.fetchMovies();
    }, []);

    if (movieStore.loading) {
        return <div>Loading...</div>;
    }

    if (movieStore.error) {
        return <div>Error: {movieStore.error}</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Películas Populares</h2>
            <Slider cards={movieStore.moviesPopular}/>
        </div>
    );
});

export default PopularMovies;