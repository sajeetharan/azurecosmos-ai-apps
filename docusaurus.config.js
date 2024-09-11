// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// USAGE: Config object can be accessed via React context as `{siteConfig}`
//   See: https://docusaurus.io/docs/configuration#custom-configurations
/** @type {import('@docusaurus/types').Config} */

import { themes as prismThemes } from "prism-react-renderer";
import { manageCookieLabel } from "./constants.js";

const config = {
  // CONFIG: Add Custom Fields - globally reference them from siteConfig
  //    See: https://docusaurus.io/docs/deployment#using-environment-variables
  customFields: {
    description:
      "Azure Developer CLI (azd) templates are idiomatic application templates created using the `azd` conventions so that you can use `azd` to get started on Azure.",
  },

  // CONFIG: Landing Pages uses this (also globally via siteConfig)
  title: "Azure Cosmos DB AI Resources",
  tagline: "Discover - Create - Contribute",

  // CONIFIG: Used for GitHub Pages
  url: "https://sajeetharan.github.io",
  baseUrl: "/azurecosmos-ai-apps/",
  favicon: "img/favicon.ico",
  organizationName: "sajeetharan",
  projectName: "azurecosmos-ai-apps",
  deploymentBranch: "gh-pages",

  // CONFIG: Early detection for site health
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // CONFIG: Localization if supporting multiple languages
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // CONFIG: scripts
  scripts: [
    "https://js.monitor.azure.com/scripts/c/ms.analytics-web-4.min.js",
    "https://wcpstatic.microsoft.com/mscc/lib/v2/wcp-consent.js",
  ],

  // CONFIG: theme = set properties for UI like navbar, footer, docs, copyright etc.
  //    See: https://docusaurus.io/docs/api/docusaurus-config#themeConfig
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // CONFIG: sidebar
      //    See:
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },

      // CONFIG: default theme color mode
      //    See:
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      // CONFIG: navbar logo, items, style, stickiness
      //    See: https://docusaurus.io/docs/next/api/themes/configuration#navbar
      navbar: {
        title: "Azure Cosmos DB AI Resources",
        logo: {
          alt: "AI Apps logo",
          src: "img/logo.png",
          href: "/",
          target: "_self",
          width: 32,
          height: 32,
        },
        items: [
          // CONFIG:
          // Make sure you have class defined in src/css/custom.css
          {
            type: "custom-NavbarButton",
            position: "right",
          },
        ],
      },

      // CONFIG:
      //    See:
      footer: {
        style: "light",
        links: [
          {
            label: `azd Reference`,
            to: "https://learn.microsoft.com/azure/developer/azure-developer-cli/reference",
          },
          {
            label: "Privacy Statement",
            to: "https://privacy.microsoft.com/privacystatement",
          },
          {
            label: manageCookieLabel,
            to: " ",
          },
          {
            label: "Built With Docusaurus",
            to: "https://docusaurus.io",
          },
          {
            label: `Copyright © ${new Date().getFullYear()} Microsoft`,
            to: "https://microsoft.com",
          },
        ],
      },

      // CONFIG: the prism-react-renderer to highlight code blocks, add magic comments (influence code highlighting)
      // Change: 'theme' and `darkTheme` constants at top of this config file
      //    See: https://docusaurus.io/docs/next/api/themes/configuration#codeblock-theme
      //    See: https://docusaurus.io/docs/next/markdown-features/code-blocks#custom-magic-comments
      //    For additional languages e.g., 'csharp','java','js','typescript','python', 'rust', 'html','css', 'go', 'dart'
      //    See: https://docusaurus.io/docs/next/markdown-features/code-blocks#supported-languages
      //    See: https://prismjs.com/#supported-languagescshar
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  // CONFIG: plugins
  //    See
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  // CONFIG: Set presets for chosen theme
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // CONFIG: docs = collections of pages, tutorials, documentation
        //    See: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs
        // FIXME: TEMPORARILY DISABLE DOCS
        // docs: { sidebarPath: require.resolve("./sidebars.js"), },
        // docs: false,
        docs: false,

        // CONFIG: blog = timestamped pages, tags, site feed
        //    See: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog
        // FIXME: TEMPORARILY DISABLE BLOG
        blog: false,

        // CONFIG: theme = currently using `classic`
        //    See: https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
};

module.exports = config;
