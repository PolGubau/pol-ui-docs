import { CodeData } from '@components/CodeDemo';
import { Datepicker } from 'pol-ui'

const code = `
'use client';

import { Datepicker } from 'flowbite-react';

function Component() {
  return <Datepicker inline />;
}
`;

const codeRSC = `
import { Datepicker } from 'flowbite-react';

function Component() {
  return <Datepicker inline />;
}
`;

function Component() {
  return <Datepicker inline />;
}

export const inline: CodeData = {
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
    {
      fileName: 'server',
      language: 'tsx',
      code: codeRSC,
    },
  ],
  githubSlug: 'datepicker/datepicker.inline.tsx',
  component: <Component />,
};
