import type { FC } from 'react';

import FlashIcon from '@components/icons/flash';
import CodeDocumentIcon from '@components/icons/code-document';
import MagicIcon from '@components/icons/magic';
import ServerIcon from '@components/icons/server';
 
interface FeaturesProps {}

export const features = [
  {
    name: 'Todo en uno',
    description:
      'Pol-ui es una librería de componentes que te permite crear interfaces de usuario de forma rápida y sencilla.',
    icon: <FlashIcon className="stroke-black dark:stroke-white" />
  },
  {
    name: 'Completamente en Typescript',
    description:
      'Todos los componentes están escritos en Typescript, por lo que puedes  sacar el máximo provecho de tu editor de código.',
    icon: <CodeDocumentIcon className="stroke-black dark:stroke-white" />
  },
  {
    name: 'Totalmente personalizable',
    description:
      'Puedes personalizar los componentes de Pol-ui para que se adapten a tu marca.',
    icon: <MagicIcon className="stroke-black dark:stroke-white" />
  },
  {
    name: 'Construido sobre React',
    description:
      "Pol-ui está construido sobre React, por lo que puedes usarlo en tus proyectos de React o Next.js sin ningún problema.",
    icon: <ServerIcon className="stroke-black dark:stroke-white" />
  }
];

const FeaturesES: FC<FeaturesProps> = () => {
  return (
    <section className="z-10 my-10 gap-6">
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className='gap-4 p-4 backdrop-blur flex flex-col justify-between rounded-3xl shadow-lg bg-primary-600/10 dark:bg-secondary/10'
          >
            <header className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 ">
                {feature.icon}
              </div>
              <h3 className="mx-3 text-lg font-semibold text-black dark:text-white">
                {feature.name}
              </h3>
            </header>
            <p className="pl-1 text-secondary-800 dark:text-gray-400">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturesES;
