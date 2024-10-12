import React from 'react'

function Banner() {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <div className="relative h-96">
        <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" alt="Banner" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl font-bold mb-4">Bienvenido a Cine Scope</h1>
            <p className="text-lg mb-8">Descubre las últimas películas y series.</p>
            <div className="w-full max-w-lg flex">
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Buscar..." className="bg-white text-black rounded-l-full px-4 py-2 w-full"/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-full">Buscar</button>
            </div>
        </div>
    </div>
  )
}

export default Banner