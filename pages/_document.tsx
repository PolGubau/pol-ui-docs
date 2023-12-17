import { Html, Head, Main, NextScript } from 'next/document';
import { SkipNavLink } from 'nextra-theme-docs';

import { fonts } from './_app';
import { ThemeModeScript } from 'pol-ui';

const Document = () => {
  return (
    <Html className={fonts.sans.variable} dir="ltr" lang="en-US">
      <Head >
        <ThemeModeScript />
        </Head>
      <body className='overflow-x-hidden'>
        <SkipNavLink styled />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
