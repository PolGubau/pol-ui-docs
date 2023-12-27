import type { FC } from 'react';

import { Button } from 'pol-ui';

import { Snippet, Logo } from '@components';
import LinkIcon from '@components/icons/link';

interface HeroProps {
  texts?: {
    subtitle: string;
  };
}

const Hero: FC<HeroProps> = ({ texts: { subtitle } }: HeroProps) => {
  return (
    <section className="relative mt-12 w-full gap-6 overflow-clip lg:mt-24 xl:mt-32">
      <header className="my-8 flex items-center justify-center gap-4">
        <Logo height={90} />
        <h1 className="text-5xl font-bold text-black dark:text-white md:text-8xl">
          Pol-ui
        </h1>
      </header>
      <div className="absolute -left-4 top-0 h-72 w-72 animate-blob rounded-full bg-primary opacity-70 mix-blend-multiply blur-xl filter " />
      <div className="animation-delay-2000 absolute -right-4 top-0 h-72 w-72 animate-blob rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-lg filter" />
      <div className="animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 animate-blob rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter" />

      <p className="mt-2 text-center text-lg font-medium">{subtitle}</p>

      <div className="z-10 my-6 flex justify-center gap-2">
        <Button href="/docs/introduction">Docs</Button>

        <Button
          color="secondary"
          href="https://github.com/polgubau/tailwind-variants"
          rel="noopener noreferrer"
          target="_blank"
          title="github homepage"
        >
          Github
          <LinkIcon className="ml-1" />
        </Button>
      </div>
      <Snippet className="z-10" />
    </section>
  );
};

export default Hero;
