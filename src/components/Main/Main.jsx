/* eslint-disable quotes */
import './Main.css';
import React from 'react';
import useFetch from '../api/useFetch';
import Box from '../Box/Box';
import Navbar from '../Navbar/Navbar';

export default function Main() {
  const { data: Punchy } = useFetch('http://acnhapi.com/v1/villagers/48');
  const { data: Vladimir } = useFetch('http://acnhapi.com/v1/villagers/71');
  const { data: Midge } = useFetch('http://acnhapi.com/v1/villagers/30');
  const { data: Maddie } = useFetch('http://acnhapi.com/v1/villagers/120');
  const { data: Sherb } = useFetch('http://acnhapi.com/v1/villagers/180');

  const villagers = [Punchy, Vladimir, Midge, Maddie, Sherb];

  return (
    <div className="Main">
      <Navbar />
      <div className="Bubbles">
        {villagers.map((villager) => villager.id && (
        <Box
          key={villager.id}
          name={villager.name["name-USen"]}
          text={villager["text-color"]}
          bubble={villager["bubble-color"]}
          iconurl={villager.icon_uri}
          species={villager.species}
          personality={villager.personality}
          saying={villager.saying}
        />
        ))}
      </div>
    </div>
  );
}
