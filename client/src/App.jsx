import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'

const App = () => {
  const { audioRef, track } = useContext(PlayerContext)

  return (
    <div className="h-screen bg-[#080808] p-3 flex flex-col gap-3 overflow-hidden text-white">
      <div className="flex-1 flex gap-3 overflow-hidden">
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track ? track.file : ""} preload="auto"></audio>
    </div>
  )
}

export default App