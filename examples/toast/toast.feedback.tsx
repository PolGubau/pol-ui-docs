import { FaTelegramPlane } from 'react-icons/fa';
import { CodeData } from '@components/CodeDemo';
import { Toast } from 'pol-ui'

const code = `
'use client';

import { Toast } from 'flowbite-react';
import { FaTelegramPlane } from 'react-icons/fa';

function Component() {
  return (
    <Toast>
      <FaTelegramPlane className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
      <div className="pl-4 text-sm font-normal">Message sent successfully.</div>
    </Toast>
  );
}
`;

const codeRSC = `
import { Toast } from 'flowbite-react';
import { FaTelegramPlane } from 'react-icons/fa';

function Component() {
  return (
    <Toast>
      <FaTelegramPlane className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
      <div className="pl-4 text-sm font-normal">Message sent successfully.</div>
    </Toast>
  );
}
`;

function Component() {
  return (
    <Toast>
      <FaTelegramPlane className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
      <div className="pl-4 text-sm font-normal">Message sent successfully.</div>
    </Toast>
  );
}

export const feedback: CodeData = {
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
  githubSlug: 'toast/toast.feedback.tsx',
  component: <Component />,
};
