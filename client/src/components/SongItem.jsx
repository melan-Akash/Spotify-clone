import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({ image, name, desc, id }) => {
  const { playWithId } = useContext(PlayerContext)

  return (
    <div 
      onClick={() => playWithId(id)} 
      className="p-3 bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300 relative group rounded-lg cursor-pointer flex flex-col items-start"
    >
      <div className="relative w-full aspect-square mb-2.5">
        <img className="rounded-md w-full h-full object-cover" src={image} alt="song" />
        {/* Floating Green Play Button on Hover */}
        <div className="absolute bottom-2.5 right-2.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-[#1db954] w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95">
          <svg className="w-5 h-5 text-black fill-current ml-0.5" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <p className="font-bold text-[16px] text-white text-left w-full truncate">{name || "Song Name"}</p>
      <p className="font-normal text-[14px] text-[#b3b3b3] text-left w-full truncate mt-0.5">{desc || "Artist/Description"}</p>
    </div>
  )
}

export default SongItem