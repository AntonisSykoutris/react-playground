import React from 'react';

type Props = {
  name: string;
  imageSrc: string;
};

export default function HeroCard({ name, imageSrc }: Props) {
  return (
    <div className='bg-[#424242] h-[28rem] w-[20rem]'>
      <h2>{name}</h2>
      <div>
        <img src={imageSrc} alt={name} />
      </div>
    </div>
  );
}
