import type { FC, HTMLAttributes } from 'react';

import { useState } from 'react';
import { Button, Tooltip } from 'pol-ui';

import CheckIcon from '@components/icons/check';
import CopyIcon from '@components/icons/copy';

interface Props {}

type NativeAttrs = Omit<HTMLAttributes<any>, keyof Props>;

export type SnippetProps = Props & NativeAttrs;

const Snippet: FC<SnippetProps> = ({ className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('npm i pol-ui');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };

  return (
    <div
      className={`flex w-full items-center justify-center gap-2 pb-2  ${
        className ? ` ${className}` : ''
      }`}
    >
      <div
        className="rounded-2xl bg-secondary-900/30 px-3 py-2 dark:text-white"
        style={{
          zIndex: 50
        }}
      >
        $ npm install pol-ui
      </div>

      <Tooltip animation={`duration-${20}`} content="Copy to clipboard">
        <Button
          className="flex aspect-square items-center justify-center rounded-full"
          color="secondary"
          size={'sm'}
          onClick={handleCopyCode}
        >
          {copied ? (
            <CheckIcon className="text-success" size={18} />
          ) : (
            <CopyIcon
              className="text-neutral-600 dark:text-neutral-400"
              size={18}
            />
          )}
        </Button>
      </Tooltip>
    </div>
  );
};

export default Snippet;
