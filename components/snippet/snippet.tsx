import type { FC, HTMLAttributes } from 'react';

import { useState } from 'react';

import {  Button, Tooltip } from 'pol-ui';
import CheckIcon from '@components/icons/check';
import CopyIcon from '@components/icons/copy';

interface Props {}

type NativeAttrs = Omit<HTMLAttributes<any>, keyof Props>;

export type SnippetProps = Props & NativeAttrs;

const Snippet: FC<SnippetProps> = ({ className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('npm install pol-ui');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };

  return (
    <div
      className={`flex gap-2 pb-2 w-full items-center justify-center  ${className ? ` ${className}` : ''}`}
     >
      <div className="dark:text-white max-w-[400px] bg-secondary-100 dark:bg-secondary-900 px-3 py-2 rounded-2xl">npm install pol-ui</div>
       
      

      <Tooltip content="Copy to clipboard"  animation={ `duration-${20}` }>
        
        <Button
          onClick={ handleCopyCode }
          className="flex items-center justify-center aspect-square rounded-full"
          color={copied ? 'success' : 'secondary'}
          size='sm'
        >
        {copied ? (
          <CheckIcon className="text-success" size={18} />
        ) : (
          <CopyIcon
            className="text-secondary-600 dark:text-secondary-400"
            size={18}
          />
          ) }
        </Button>
      </Tooltip>
    </div>
  );
};

export default Snippet;
