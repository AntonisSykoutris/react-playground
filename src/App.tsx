import React, { useEffect, useState } from 'react';
import { Character } from './lib/character.model';
import HeroCard from './components/HeroCard';
import { HeroesFile } from './lib/types';

const data: HeroesFile = require('./lib/mock-data.json');
const { characters } = data;

export default function App() {
  const [input, setInput] = useState('');
  const newList = characters.filter(hero => hero.name.toLocaleLowerCase().includes(input.trim().toLocaleLowerCase()));

  return (
    <div className=' container flex flex-col items-center justify-center'>
      <div className='py-10'>
        <input
          className=' border border-black rounded-md'
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder='Search characters'
        />
      </div>
      <ul className=' flex gap-x-3 gap-y-5 max-md:flex-col flex-wrap'>
        {newList.map((hero, index) => (
          <li key={hero.id} className={`border-[4px] ${index % 2 === 0 ? 'border-red-500' : ''}`}>
            <HeroCard name={hero.name} imageSrc={hero.image.url} />
          </li>
        ))}
      </ul>
    </div>
  );
}
