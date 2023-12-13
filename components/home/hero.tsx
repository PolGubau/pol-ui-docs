import type { FC } from 'react';
import { Button } from 'pol-ui';
import {  Snippet, Logo } from '@components';
import LinkIcon from '@components/icons/link';

interface HeroProps { }

const Hero: FC<HeroProps> = () => {
  return (
    <section
      className='relative mt-12 gap-6 lg:mt-24 xl:mt-32 w-full overflow-clip'
    >


      <header className='flex gap-4 items-center justify-center my-8'>
        <Logo height={ 90 } />
        <h1 className="text-5xl font-bold text-black dark:text-white md:text-8xl">
          Pol-ui
        </h1>
      </header>
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ">
      </div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob animation-delay-2000">
      </div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000">
      </div>

      <p className="mt-2 text-center text-lg font-medium">
        La completa solución a tus interfaces en React
      </p>

      <div className='z-10 flex gap-2 justify-center my-6' >
        <Button href="/docs/introduction">Documentation</Button>

        <Button href="https://github.com/polgubau/tailwind-variants"
          rel="noopener noreferrer"
          color='secondary'
          target="_blank"
          title="github homepage">
          Github
          <LinkIcon className="ml-1" /></Button>


      </div>
      <Snippet className="z-10" />
    </section>
  );
};

export default Hero;
