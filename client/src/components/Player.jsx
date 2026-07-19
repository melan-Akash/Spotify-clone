import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
  const { track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong, volume, changeVolume } = useContext(PlayerContext)

  return (
    <div className="w-full h-20 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg flex justify-between items-center text-white px-6">
      {track && track.desc ? (
        <div className="hidden lg:flex items-center gap-4">
          <img className="w-12 h-12 rounded-md object-cover" src={track.image} alt="song" />
          <div>
            <p className="font-semibold text-sm text-white">{track.name}</p>
            <p className="text-xs text-[#b3b3b3]">{track.desc.slice(0, 24)}</p>
          </div>
        </div>
      ) : (
        <div className="hidden lg:flex items-center gap-4">
          <div className="w-12 h-12 rounded-md bg-white/10 animate-pulse"></div>
          <div>
            <p className="font-semibold text-sm text-white">No song playing</p>
            <p className="text-xs text-[#b3b3b3]">Choose a track</p>
          </div>
        </div>
      )}

      {/* Control buttons & Progress bar */}
      <div className="flex flex-col items-center gap-1.5 m-auto">
        <div className="flex gap-6 items-center">
          <img className="w-4 cursor-pointer opacity-70 hover:opacity-100 transition" src={assets.shuffle_icon} alt="Shuffle" />
          <img onClick={previous} className="w-4 cursor-pointer opacity-70 hover:opacity-100 transition" src={assets.prev_icon} alt="Previous" />
          {playStatus 
            ? <img onClick={pause} className="w-8 h-8 cursor-pointer hover:scale-105 transition bg-white text-black p-2 rounded-full" src={assets.pause_icon} alt="Pause" />
            : <img onClick={play} className="w-8 h-8 cursor-pointer hover:scale-105 transition bg-white text-black p-2 rounded-full" src={assets.play_icon} alt="Play" />
          }
          <img onClick={next} className="w-4 cursor-pointer opacity-70 hover:opacity-100 transition" src={assets.next_icon} alt="Next" />
          <img className="w-4 cursor-pointer opacity-70 hover:opacity-100 transition" src={assets.loop_icon} alt="Loop" />
        </div>
        
        <div className="flex items-center gap-3 text-xs text-[#b3b3b3]">
          <p>{time.currentTime.minute}:{time.currentTime.second < 10 ? '0' + time.currentTime.second : time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className="w-[45vw] max-w-[500px] bg-white/20 h-1 rounded-full cursor-pointer relative group">
            <div ref={seekBar} className="h-full bg-green-500 rounded-full relative">
              <div className="absolute -right-1.5 -top-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"></div>
            </div>
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second < 10 ? '0' + time.totalTime.second : time.totalTime.second}</p>
        </div>
      </div>

      {/* Auxiliary controls */}
      <div className="hidden lg:flex items-center gap-3 opacity-80">
        <img className="w-4 cursor-pointer hover:opacity-100" src={assets.play_icon} alt="Plays" />
        <img className="w-4 cursor-pointer hover:opacity-100" src={assets.mic_icon} alt="Mic" />
        <img className="w-4 cursor-pointer hover:opacity-100" src={assets.queue_icon} alt="Queue" />
        <img className="w-4 cursor-pointer hover:opacity-100" src={assets.speaker_icon} alt="Speaker" />
        <img className="w-4" src={assets.volume_icon} alt="Volume" />
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={volume} 
          onChange={(e) => changeVolume(Number(e.target.value))} 
          className="volume-slider w-20 cursor-pointer accent-[#1db954]"
        />
        <img className="w-4 cursor-pointer hover:opacity-100" src={assets.mini_player_icon} alt="Mini Player" />
        <img className="w-4 cursor-pointer hover:opacity-100" src={assets.zoom_icon} alt="Zoom" />
      </div>
    </div>
  )
}

export default Player