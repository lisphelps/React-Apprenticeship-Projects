/* eslint-disable quotes */
import './Main.css';
import React from 'react';
import useFetch from '../api/useFetch';
import Box from '../Box/Box';
import Navigation from '../Navigation/Navigation';

export default function Main() {
  const { data: Punchy } = useFetch('https://acnhapi.com/v1/villagers/48');
  const { data: Vladimir } = useFetch('https://acnhapi.com/v1/villagers/71');
  const { data: Midge } = useFetch('https://acnhapi.com/v1/villagers/30');
  const { data: Maddie } = useFetch('https://acnhapi.com/v1/villagers/120');
  const { data: Sherb } = useFetch('https://acnhapi.com/v1/villagers/180');

  const villagers = [Punchy, Vladimir, Midge, Maddie, Sherb];

  return (
    <div className="Main">
      <Navigation />
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
