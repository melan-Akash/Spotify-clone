import React, { useEffect, useRef, useContext } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import Search from './Search'
import { PlayerContext } from '../context/PlayerContext'

const DisplayHomeSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col gap-6">
      <div className="flex justify-between items-center py-4">
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-[#242424] rounded-full"></div>
          <div className="w-8 h-8 bg-[#242424] rounded-full"></div>
        </div>
        <div className="flex gap-4">
          <div className="w-32 h-8 bg-[#242424] rounded-full"></div>
          <div className="w-24 h-8 bg-[#242424] rounded-full"></div>
        </div>
      </div>
      <div>
        <div className="w-48 h-8 bg-[#242424] rounded mb-4"></div>
        <div className="flex gap-4 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="min-w-[180px] p-2 rounded bg-[#1c1c1c] flex flex-col gap-3">
              <div className="w-full aspect-square bg-[#242424] rounded"></div>
              <div className="h-4 w-3/4 bg-[#242424] rounded"></div>
              <div className="h-3 w-1/2 bg-[#242424] rounded"></div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="w-48 h-8 bg-[#242424] rounded mb-4"></div>
        <div className="flex gap-4 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="min-w-[180px] p-2 rounded bg-[#1c1c1c] flex flex-col gap-3">
              <div className="w-full aspect-square bg-[#242424] rounded"></div>
              <div className="h-4 w-3/4 bg-[#242424] rounded"></div>
              <div className="h-3 w-1/2 bg-[#242424] rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Display = () => {
  const { albumsData } = useContext(PlayerContext);
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  
  // URL එකෙන් ID එක ලබාගැනීම සහ අදාළ ඇල්බමයේ Background Color එක සෙවීම
  const albumId = isAlbum ? location.pathname.split('/').pop() : "";
  const bgColor = isAlbum && albumsData.length > 0 ? albumsData.find((x) => x._id === albumId)?.bgColor : "#121212";

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
    } else {
      displayRef.current.style.background = `#121212`
    }
  })

  return (
    <div ref={displayRef} className="w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      {albumsData.length > 0 ? (
        <Routes>
          <Route path="/" element={<DisplayHome />} />
          <Route path="/album/:id" element={<DisplayAlbum album={albumsData.find((x) => x._id === albumId)} />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      ) : (
        <DisplayHomeSkeleton />
      )}
    </div>
  )
}

export default Display