import React, { useState, useEffect } from "react";
import "../styles/Player.css"

const pokemusic = [
  `${process.env.PUBLIC_URL}/PokemonCenter.mp3`,
  `${process.env.PUBLIC_URL}/PokemonIntro.mp3`,
  `${process.env.PUBLIC_URL}/Jigglypuff.mp3`
]

const useAudio = url => {
  const [audio, setAudio] = useState(new Audio(pokemusic[Math.floor(Math.random() * pokemusic.length)]));
  const [playing, setPlaying] = useState(false);

  console.log(setAudio);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing, audio]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div className="player">
      <button id="playButton" onClick={toggle}>{playing ? "Pause" : "Play" }</button>
    </div>
  );
};

export default Player;