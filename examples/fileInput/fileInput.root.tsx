import { CodeData } from '@components/CodeDemo';
import { FileInput, Label } from 'pol-ui'

const code = `
'use client';

import { FileInput, Label } from 'flowbite-react';

function Component() {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="file-upload" value="Upload file" />
      </div>
      <FileInput id="file-upload" />
    </div>
  );
}
`;

const codeRSC = `
function Component() {
  
  import { FileInput, Label } from 'flowbite-react';

  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="file-upload" value="Upload file" />
      </div>
      <FileInput id="file-upload" />
    </div>
  );
}
`;

function Component() {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="file-upload" value="Upload file" />
      </div>
      <FileInput id="file-upload" />
    </div>
  );
}

export const root: CodeData = {
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
  githubSlug: 'fileInput/fileInput.root.tsx',
  component: <Component />,
};
