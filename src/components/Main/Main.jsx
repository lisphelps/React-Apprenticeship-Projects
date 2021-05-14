/* eslint-disable no-useless-computed-key */
/* eslint-disable quotes */
import './Main.css';
import React from 'react';
// import PropTypes from 'prop-types';
import useFetch from '../api/useFetch';
import Box from '../Box/Box';

export default function Main() {
  const { data: Punchy } = useFetch('http://acnhapi.com/v1/villagers/48');
  const { data: Vladimir } = useFetch('http://acnhapi.com/v1/villagers/71');
  const { data: Midge } = useFetch('http://acnhapi.com/v1/villagers/30');
  const { data: Maddie } = useFetch('http://acnhapi.com/v1/villagers/120');
  const { data: Sherb } = useFetch('http://acnhapi.com/v1/villagers/180');

  const villagers = [Punchy, Vladimir, Midge, Maddie, Sherb];

  return (
    <div className="Main">
      {villagers.map((villager) => (
        <Box
          key={villager.id}
          name={villager.name["US-en"]}
          text={villager['text-Color']}
          bubble={villager['bubble-Color']}
          iconurl={villager.icon_uri}
          species={villager.species}
          personality={villager.personality}
          saying={villager.saying}
        />
      ))}
    </div>
  );
}
