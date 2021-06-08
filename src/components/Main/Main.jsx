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

  Punchy.quote = "Do you have a favorite place? You know, a place where you can take a midday nap when you're tired? Huh? Oh me? Well, when you're out, sometimes I like to snooze on your floor!";
  Vladimir.quote = "Like this whole email thingy. Oh, goodie, you can send a picture of a smiley face through the ethernet! In my day, if you wanted to talk to someone, you had to walk over to their house and shout at them! Or you could always write an angry letter and tape it to their buggy when they weren't lookin'... Whaddaya mean, how old am I?";
  Midge.quote = "I've always been fascinated by outer space. I would love to be an astronaut and visit other planets. It'd be like a space safari!";
  Maddie.quote = "You know, catching bugs would be SO much easier if they'd just hop into my net! What I need is some bait! I wonder if some yummy fried ice cream would lure 'em in?";
  Sherb.quote = 'Some mysterious lady came by and told me my outfit increased audience interest by 15%. Then she disappeared!';

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
          quote={villager.quote}
        />
        ))}
      </div>
    </div>
  );
}
