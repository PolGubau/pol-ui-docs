import type { FC } from 'react';

import { card } from '@components/elements';

export interface Feature {
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface FeaturesProps {
  features?: Feature[];
}

const Features: FC<FeaturesProps> = ({ features }: FeaturesProps) => {
  return (
    <section className="z-10 my-10 gap-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className={card({ class: 'gap-2 p-4 backdrop-blur' })}
          >
            <div className="flex items-center">
              <div className="bg-neutral/10 flex h-12 w-12 items-center justify-center rounded-full dark:bg-white/10">
                {feature.icon}
              </div>
              <h3 className="mx-3 text-lg font-bold text-black dark:text-white">
                {feature.name}
              </h3>
            </div>
            <p className="pl-1 text-gray-500 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
