import type { FC } from 'react';
import { Button } from 'pol-ui';
import {  Snippet, Logo } from '@components';
import LinkIcon from '@components/icons/link';

interface HeroProps { }

const HeroES: FC<HeroProps> = () => {
  return (
    <section
      className='relative mt-12 gap-6 lg:mt-24 xl:mt-32 w-full overflow-visible'
    >


      <header className='flex gap-4 items-center justify-center my-8'>
        <Logo height={ 90 } />
        <h1 className="text-5xl font-bold text-black dark:text-white md:text-8xl">
          Pol-ui
        </h1>
      </header>
      <div className="absolute top-0 -left-4 w-72 h-72 bg-secondary-300 rounded-full dark:opacity-10 blur-xl opacity-70 animate-blob -z-10">
      </div>
      <div className="absolute -top-10 dark:right-16 -right-8 w-72 h-72 bg-primary-300 rounded-full dark:opacity-10 blur-xl opacity-70 dark:blur-lg   animate-blob animation-delay-2000 -z-10">
      </div>
      <div className="absolute -bottom-30 left-20 w-72 h-72 bg-primary-300 rounded-full dark:opacity-10 blur-xl opacity-70 animate-blob animation-delay-4000 -z-10">
      </div>

      <p className="mt-2 text-center text-lg font-medium">
        La completa solución a tus interfaces en React
      </p>

      <Snippet className="z-10 mt-8" />

      <div className='z-10 flex gap-2 justify-center my-6' >
        <Button rounded='lg' outline className='bg-primary' href="/docs/introduction">Documentación</Button>

        <Button outline rounded='lg' href="https://github.com/polgubau/pol-ui"
          rel="noopener noreferrer"
          color='secondary'
          target="_blank"
          title="github homepage">
          Github
          <LinkIcon className="ml-1" /></Button>


      </div>
    </section>
  );
};

export default HeroES;
