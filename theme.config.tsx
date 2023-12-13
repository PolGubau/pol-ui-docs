import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

import {  Logo, NextUILogo } from "@components";

import pkg from "./package.json";
import { languageMap } from "translations/text";

const DEFAULT_VERSION = "2.0.13";

const getVersion = () => {
  return (
    pkg?.dependencies?.["pol-ui"]?.replace("^", "") ??
    DEFAULT_VERSION
  );
};

const config: DocsThemeConfig = {
  darkMode: true,
  nextThemes: {
    defaultTheme: "dark",
  },
  logo: (
    <div className="flex items-center">
      <Logo height={30} />
      <b className="mx-1.5 hidden text-sm font-semibold sm:block sm:text-base">
        Pol-ui
      </b>
      <span className="hidden sm:flex opacity-70">
        v{getVersion()}
      </span>
    </div>
  ),
  head: function useHead() {
    const config = useConfig();
    const description =
      config.frontMatter.description ||
      "The power of pol combined with a first-class variant API.";
    const image =
      config.frontMatter.image || "https://pol-ui.org/banner.png";

    // || "https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg";

    return (
      <>
        {/* Favicons, meta */}
        <link
          href="/favicon/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicon/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/favicon/site.webmanifest" rel="manifest" />
        <link
          color="#000000"
          href="/favicon/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta content="en" httpEquiv="Content-Language" />
        <meta content={description} name="description" />
        <meta content={description} name="og:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@polgubau" name="twitter:site" />
        <meta content={image} name="twitter:image" />
        <meta content={`${config.title} – pol-ui`} name="og:title" />
        <meta content={image} name="og:image" />
        <meta content="Pol-ui" name="apple-mobile-web-app-title" />
      </>
    );
  },
  useNextSeoProps: function SEO() {
    const router = useRouter();
    const { frontMatter } = useConfig();

    const defaultTitle = frontMatter.overrideTitle || "pol ui";

    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate: router.pathname !== "/" ? `%s – ${defaultTitle}` : "",
    };
  },
  project: {
    link: "https://github.com/polgubau/pol-ui",
  },
  docsRepositoryBase:
    "https://github.com/polgubau/pol-ui-docs/blob/main",
  gitTimestamp: "",
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            href="https://nextui.org?utm_source=pol-ui.org"
            rel="noopener noreferrer"
            target="_blank"
            title="nextui.org homepage"
          >
            <span className="mr-1">Powered by</span>
            <NextUILogo height={30} />
          </a>
        </div>
        <p className="mt-6 text-xs">
          MIT {new Date().getFullYear()} Pol-ui
        </p>
      </div>
    ),
  },
  i18n: Object.entries(languageMap).map(([locale, text]) => ({
    direction: "ltr",
    locale,
    text,
  })),
};

export default config;
