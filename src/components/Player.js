import React, { useState, useEffect } from "react";

const pokemusic = [
  `${process.env.PUBLIC_URL}/PokemonCenter.mp3`,
]

const useAudio = url => {
  const [audio] = useState(new Audio(pokemusic[Math.floor(Math.random() * pokemusic.length)]));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div class="player">
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Player;