import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()

  return (
    <div className="w-[25%] h-full flex flex-col gap-3 text-white hidden lg:flex">
      {/* Home / Search Container */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg h-[20%] rounded-2xl flex flex-col justify-around p-4">
        <div onClick={() => navigate('/')} className="flex items-center gap-3 pl-4 cursor-pointer hover:text-green-500 transition duration-300">
          <img className="w-6" src={assets.home_icon} alt="Home" />
          <p className="font-bold">Home</p>
        </div>
        <div onClick={() => navigate('/search')} className="flex items-center gap-3 pl-4 cursor-pointer hover:text-green-500 transition duration-300">
          <img className="w-6" src={assets.search_icon} alt="Search" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      {/* Library / Playlists Container */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg h-[80%] rounded-2xl flex flex-col overflow-hidden">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Library" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5 cursor-pointer hover:opacity-80" src={assets.arrow_icon} alt="Arrow" />
            <img className="w-5 cursor-pointer hover:opacity-80" src={assets.plus_icon} alt="Plus" />
          </div>
        </div>

        <div className="p-4 bg-white/5 border border-white/5 m-2 rounded-xl font-semibold flex flex-col items-start justify-start gap-1 pl-4 hover:bg-white/10 transition duration-300">
          <h1>Create your first playlist</h1>
          <p className="font-light text-sm text-gray-300">It's easy we will help you</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black font-bold rounded-full mt-4 hover:scale-105 transition duration-300">Create playlist</button>
        </div>

        <div className="p-4 bg-white/5 border border-white/5 m-2 rounded-xl font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4 hover:bg-white/10 transition duration-300">
          <h1>Let's find some podcast to follow</h1>
          <p className="font-light text-sm text-gray-300">we will keep you update on new episodes</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black font-bold rounded-full mt-4 hover:scale-105 transition duration-300">Browse podcast</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar