import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import { PlayerContext } from '../context/PlayerContext'
import SongItem from './SongItem'
import AlbumItem from './AlbumItem'

const Search = () => {
  const { songsData, albumsData } = useContext(PlayerContext)
  const [query, setQuery] = useState('')

  const filteredSongs = songsData.filter(song => 
    song.name.toLowerCase().includes(query.toLowerCase()) || 
    song.desc.toLowerCase().includes(query.toLowerCase())
  )

  const filteredAlbums = albumsData.filter(album => 
    album.name.toLowerCase().includes(query.toLowerCase()) || 
    album.desc.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <Navbar />
      <div className="mt-2 mb-6">
        <input 
          type="text" 
          placeholder="What do you want to listen to?" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md bg-[#292929] text-white px-5 py-3 rounded-full outline-none focus:bg-[#333] transition-all text-sm"
        />
      </div>

      {query && (
        <div className="flex flex-col gap-8">
          {filteredSongs.length > 0 && (
            <div>
              <h2 className="font-bold text-2xl mb-4">Songs</h2>
              <div className="flex overflow-auto">
                {filteredSongs.map((item, index) => (
                  <SongItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image} />
                ))}
              </div>
            </div>
          )}

          {filteredAlbums.length > 0 && (
            <div>
              <h2 className="font-bold text-2xl mb-4">Albums</h2>
              <div className="flex overflow-auto">
                {filteredAlbums.map((item, index) => (
                  <AlbumItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image} />
                ))}
              </div>
            </div>
          )}

          {filteredSongs.length === 0 && filteredAlbums.length === 0 && (
            <p className="text-gray-400 text-center mt-10">No results found for "{query}"</p>
          )}
        </div>
      )}

      {!query && (
        <div>
          <h2 className="font-bold text-2xl mb-4">Browse All Albums</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {albumsData.map((item, index) => (
              <AlbumItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Search
