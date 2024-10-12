import React from 'react'

function TrendingMovies() {
  return (
    <div className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">Películas en Tendencia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sv1xJUazXeYqALzczSZ3O6nkH75.jpg" alt="Movie Poster" classNameName="w-full h-64 object-cover"/>
                <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Joker</h3>
                    <p className="text-sm text-gray-600">4 de octubre de 2019</p>
                </div>
            </div>
            <!-- Repeat the above movie card structure for more movies -->
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg" alt="Movie Poster" className="w-full h-64 object-cover"/>
                <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Mulan</h3>
                    <p className="text-sm text-gray-600">4 de septiembre de 2020</p>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg" alt="Movie Poster" className="w-full h-64 object-cover"/>
                <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Ad Astra</h3>
                    <p className="text-sm text-gray-600">20 de septiembre de 2019</p>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" alt="Movie Poster" className="w-full h-64 object-cover"/>
                <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Avengers: Infinity War</h3>
                    <p className="text-sm text-gray-600">27 de abril de 2018</p>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg" alt="Movie Poster" className="w-full h-64 object-cover"/>
                <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">The Avengers</h3>
                    <p className="text-sm text-gray-600">4 de mayo de 2012</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrendingMovies.styles
