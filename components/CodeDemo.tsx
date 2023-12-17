'use client';

import type { ComponentProps, PropsWithChildren } from 'react';
import { useState } from 'react';
import { TbCopy, TbCheck } from "react-icons/tb";
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { Select, Tooltip, Button } from 'pol-ui';
import { CodeHighlight, type Language } from './CodeHighlight';

interface BaseCodeData<T extends 'single' | 'variant'> {
  type: T;
  githubSlug: string;
  component: React.ReactNode;
}

interface VariantCodeData<V extends string> extends BaseCodeData<'variant'> {
  variant: V;
  code: CodeVariant<V>;
}

interface SingleCodeData extends BaseCodeData<'single'> {
  code: Code;
}

interface CodeItem {
  fileName: string;
  language: Language;
  code: string;
}

type CodeVariant<V extends string> = Record<V, Code>;
type Code = CodeItem | [CodeItem, ...CodeItem[]];

export type CodeData<V extends string = string> = SingleCodeData | VariantCodeData<V>;

interface CodeDemoProps {
  data: CodeData;
}

export function CodeDemo({ data }: Readonly<CodeDemoProps>) {
  const [tabIndex, setTabIndex] = useState(0);
  const [variant, setVariant] = useState(getInitialVariant(data));

  const [isExpanded, setIsExpanded] = useState(false);
  const [isJustCopied, setISJustCopied] = useState(false);

  function copyToClipboard(value: string) {
    setISJustCopied(true);
    navigator.clipboard.writeText(value);
    setTimeout(() => setISJustCopied(false), 2000);
  }

  function getInitialVariant(data: CodeData): string {
    if (data.type === 'variant') return data.variant;

    return '';
  }

  function getVariants(data: CodeData): string[] {
    if (data.type === 'variant') return Object.keys(data.code);

    return [];
  }

  function getCode(data: CodeData, variant: string): Code {
    if (data.type === 'variant') return data.code[variant];

    return data.code;
  }

  function getCodeItems(code: Code): CodeItem[] {
    return Array.isArray(code) ? code : [code];
  }

  function getCurrent(items: CodeItem[], index: number): CodeItem {
    return items[index];
  }

  function handleSelectVariant(variant: string) {
    setTabIndex(0);
    setVariant(variant);
  }

  function getShouldExpand(rawCode: string) {
    const rem = 16;
    const offset = 41; // expand/collapse button height
    const padding = 28;
    const maxHeight = 18 * rem + offset; // mirror `max-h-72`
    const codeHeight = getTextHeight(rawCode) + padding;

    return codeHeight > maxHeight;
  }

  function getTextHeight(value: string) {
    const fontSize = 16.5;
    const lineHeight = 1.25;

    return countLines(value) * fontSize * lineHeight;
  }

  function countLines(value: string) {
    return (value.match(/\n/g) || '').length + 1;
  }

  const variants = getVariants(data);
  const code = getCode(data, variant);
  const codeItems = getCodeItems(code);
  const current = getCurrent(codeItems, tabIndex);
  const shouldExpand = getShouldExpand(current.code.trim());

  return (
    <section className="mt-6 relative rounded-3xl bg-secondary-900/10 p-2 dark:bg-secondary-100/10 sm:p-4 flex flex-col gap-6">
      <div className="absolute -right-4 -top-4">
        <EditOnGithubButton githubSlug={ data.githubSlug } />
      </div>

      <CodePreview>{ data.component }</CodePreview>
      <section
        className='relative'
      >
        <div className="flex justify-between">
          <Tabs tabIndex={ tabIndex } items={ codeItems } onSelect={ setTabIndex } />
          { variants.length > 0 && (
            <Select className="mr-2" onChange={ (e) => handleSelectVariant(e.target.value) }>
              { variants.map((v) => (
                <option key={ v } value={ v } selected={ v === variant }>
                  { v }
                </option>
              )) }
            </Select>
          ) }
          <div className="flex justify-end p-2">
            <CopyToClipboardButton isJustCopied={ isJustCopied } onClick={ () => copyToClipboard(current.code) } />
          </div>
        </div>
        <div className={ twMerge('!overflow-y-hidden', shouldExpand && !isExpanded && 'max-h-72') }>
          <CodeHighlight code={ current.code } language={ current.language } />
        </div>
        { shouldExpand && (
          <CollapseExpandButton isExpanded={ isExpanded } onClick={ () => setIsExpanded((state) => !state) } />
        ) }
      </section>
    </section>
  );
}

function Tabs({ tabIndex, items, onSelect }: Readonly<{ tabIndex: number; items: CodeItem[]; onSelect(index: number): void }>) {
  return (
    <ul className="w-fit flex  gap-2 bg-primary-100 rounded-xl dark:bg-primary-900 my-2 p-1">
      { items.map((item, index) => (


        <li
          key={ item.fileName }
          onClick={ () => onSelect(index) }
          onKeyDown={ () => onSelect(index) }

          className={ `${item === items[tabIndex] ? 'text-primary-800 dark:text-primary-50' : 'text-primary-600 dark:text-primary-500'} relative cursor-pointer  px-2 py-1 text-sm font-medium z-10` }
        >
          {item.fileName+`.${item.language}`}

          { item === items[tabIndex] ? (
            <motion.div className="underline absolute bg-primary-400 dark:bg-primary-800 h-full w-full top-0 left-0 rounded-lg -z-10"
              layoutId={ items[0].code} />
          ) : null }
        </li>

      )) }
    </ul>
  );
}

function CodePreview({ children }: Readonly<PropsWithChildren>) {
  return (
    <section className="w-full p-2">
      { children }
    </section>
  );
}

function EditOnGithubButton({ githubSlug }: Readonly<{ githubSlug: string }>) {
  const githubSrcHref = 'https://github.com/polgubau/pol-ui/blob/main/examples/';
  const href = `${githubSrcHref}${githubSlug}`;

  return (
    <Tooltip content="Edit on GitHub" arrow placement='left'>
      <a
        href={ href }
        rel="noreferrer nofollow noopener"
        target="_blank"
        className='aspect-square flex items-center justify-center  bg-primary-800 dark:bg-primary-800 z-10 p-1 rounded-full text-primary-100'
      >
        <svg
          aria-hidden
          fill="currentColor"
          viewBox="0 0 24 24"
          focusable="false"
          data-icon="github"
          className="h-7 w-7"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </Tooltip>
  );
}

function CopyToClipboardButton({ isJustCopied, onClick }: ComponentProps<'button'> & { isJustCopied: boolean }) {
  return (
    <Button
      size={ 'sm' }
      onClick={ onClick }
      className='text-primary-900 dark:text-primary-50'
      color={ isJustCopied ? 'success' : 'primary' }
    >
      { isJustCopied ? (
        <TbCheck className="h-4 w-4 text-green-500 dark:text-green-400" />
      ) : (
        <TbCopy className="h-4 w-4" />
      ) }
      { isJustCopied ? 'Done' : 'Copy' }
    </Button>
  );
}

function CollapseExpandButton({ isExpanded, onClick }: ComponentProps<'button'> & { isExpanded: boolean }) {
  return (
    <Button
      onClick={ onClick }
      rounded={'lg'}
      fullSized
      style={ {
        backgroundColor: 'rgb(63, 63, 63)',
        color: '#fafafa',
      } }
      className='mt-4'
    
    
    >
      { isExpanded ? 'Collapse code' : 'Expand code' }
    </Button>
  );
}
