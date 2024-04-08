import { defineConfig } from "vocs";

export default defineConfig({
  logoUrl: "/logo/dark.svg",
  iconUrl: "/logo/favicon.svg",
  sponsors: [
    {
      name: "Join Beta",
      height: 150,
      items: [
        [
          {
            name: "Beta",
            link: "/beta-access",
            image: "/assets/icons/beta.svg",
          },
          {
            name: "Concepts",
            link: "/micro-rollup/introduction",
            image: "/assets/icons/concepts.svg",
          },
          {
            name: "Tutorial",
            link: "/zero-to-one/getting-started",
            image: "/assets/icons/tutorial.svg",
          },
        ],
      ],
    },
  ],
  ogImageUrl:
    "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
  topNav: [
    {
      text: "Getting Started",
      link: "/zero-to-one/getting-started",
      match: "/zero-to-one",
    },
    { text: "Blog", link: "http://mirror.xyz/stackrlabs.eth" },
    {
      text: "Litepaper",
      link: "https://litepaper.stf.xyz",
    },
    {
      text: "v0.2.17-alpha",
      items: [
        {
          text: "Changelog",
          link: "/changelog",
        },
      ],
    },
  ],
  socials: [
    {
      icon: "github",
      link: "https://github.com/stackrlabs/",
      label: "GitHub",
    },
    {
      icon: "x",
      link: "https://twitter.com/0xStackr/",
      label: "Twitter",
    },
    {
      icon: "discord",
      link: "https://discord.com/invite/PY4nhg7bcc",
      label: "Community",
    },
    {
      icon: "telegram",
      link: "https://t.me/StackrCommunity",
      label: "Community",
    },
  ],
  markdown: {},
  theme: {
    accentColor: "#62EDED",
    colorScheme: "dark",
    variables: {
      borderRadius: {},
      content: {},
      color: {
        backgroundDark: "#0A1010",
        background: "#0A1010",
        codeBlockBackground: "#0A0C0C",
        background5: "rgba(98, 237, 237, 0.1)",
        background3: "rgba(98, 237, 237, 0.1)",
        white: "#62eded",
      },
    },
  },
  title: "Stackr",
  sidebar: [
    {
      text: "Beta Access",
      link: "/beta-access",
    },
    {
      text: "What to Build?",
      link: "/guides/what-to-build",
    },
    {
      text: "Micro-Rollup",
      collapsed: true,
      items: [
        {
          text: "Introduction",
          link: "/micro-rollup/introduction",
        },
        {
          text: "Utility Modes",
          link: "/micro-rollup/utility",
        },
        {
          text: "Settlement Modes",
          link: "/micro-rollup/settlement",
        },
        {
          text: "Motivation",
          collapsed: true,
          items: [
            {
              text: "Traditional Rollups",
              link: "/micro-rollup/motivation/traditional-rollups",
            },
            {
              text: "Single App Rollups",
              link: "/micro-rollup/motivation/single-app-rollups",
            },
            {
              text: "Microservices",
              link: "/micro-rollup/motivation/microservices",
            },
            {
              text: "Modularity",
              link: "/micro-rollup/motivation/modularity",
            },
            {
              text: "Sufficient Decentralization",
              link: "/micro-rollup/motivation/sufficient-decentralization",
            },
          ],
        },
        {
          text: "Architecture",
          collapsed: true,
          items: [
            {
              text: "Overview",
              link: "/micro-rollup/architecture/overview",
            },
            {
              text: "Execution Layer",
              link: "/micro-rollup/architecture/execution-layer",
            },
            {
              text: "Verification Layer",
              link: "/micro-rollup/architecture/verification-layer",
            },
          ],
        },
        {
          text: "Economics",
          link: "/micro-rollup/economics",
        },
      ],
    },
    {
      text: "Zero to One",
      collapsed: true,
      items: [
        {
          text: "Getting Started",
          link: "/zero-to-one/getting-started",
        },
        {
          text: "Building Micro-rollup",
          link: "/zero-to-one/build-your-first-mru",
        },
        {
          text: "Run it",
          link: "/zero-to-one/run-it",
        },
      ],
    },
    {
      text: "Guides",
      collapsed: true,
      items: [
        {
          text: "Check your Binaries",
          link: "/guides/checking-your-binaries",
        },
        {
          text: "Tutorials",
          collapsed: true,
          items: [
            {
              text: "Counter MRU",
              link: "/guides/tutorials/counter",
            },
          ],
        },
      ],
    },
    {
      text: "Security",
      collapsed: true,
      items: [
        {
          text: "Assumptions",
          link: "/security/assumptions",
        },
        {
          text: "Data Settlement",
          collapsed: true,
          items: [
            {
              text: "Off-chain data",
              link: "/security/data-settlement/Off-chain-storage",
            },
            {
              text: "On-chain data",
              link: "/security/data-settlement/On-chain-storage",
            },
          ],
        },
      ],
    },
    // {
    //   text: "References",
    //   collapsed: true,
    //   items: [
    //     {
    //       text: "Providers and RPC",
    //       link: "/references/providers-and-rpc",
    //     },
    //   ],
    // },
    {
      text: "Framework",
      collapsed: true,
      items: [
        {
          text: "Coming Soon",
          link: "/framework/placeholder",
        },
      ],
      // items: [
      //   {
      //     text: "State Machine",
      //     collapsed: true,
      //     items: [
      //       {
      //         text: "Introduction",
      //         link: "/framework/state-machine/introduction",
      //       },
      //       {
      //         text: "State",
      //         link: "/framework/state-machine/state",
      //       },
      //       {
      //         text: "Reducers",
      //         link: "/framework/state-machine/reducers",
      //       },
      //     ],
      //   },
      //   {
      //     text: "Action",
      //     collapsed: true,
      //     items: [
      //       {
      //         text: "Introduction",
      //         link: "/framework/action/introduction",
      //       },
      //       {
      //         text: "Action Schema",
      //         link: "/framework/action/action-schema",
      //       },
      //       {
      //         text: "Lifecycle",
      //         link: "/framework/action/lifecycle",
      //       },
      //       {
      //         text: "Execution Status",
      //         link: "/framework/action/execution-status",
      //       },
      //       {
      //         text: "Confirmation Status",
      //         link: "/framework/action/confirmation-status",
      //       },
      //     ],
      //   },
      //   {
      //     text: "Block",
      //     link: "/framework/block.mdx",
      //   },
      //   {
      //     text: "Sequencer",
      //     collapsed: true,
      //     items: [
      //       {
      //         text: "Builder",
      //         link: "/framework/sequencer/builder",
      //       },
      //       {
      //         text: "Proposer",
      //         link: "/framework/sequencer/proposer",
      //       },
      //     ],
      //   },
      //   {
      //     text: "Executor",
      //     link: "/framework/executor",
      //   },
      //   { text: "Events", link: "/framework/events" },
      // ],
    },
    {
      text: "Build",
      collapsed: true,
      items: [
        {
          text: "Coming Soon",
          link: "/build/placeholder",
        },
        // {
        //   text: "Setup",
        //   collapsed: true,
        //   items: [
        //     { text: "Getting Started", link: "/build/setup/getting-started" },
        //     { text: "Config", link: "/build/setup/config" },
        //   ],
        // },
        // {
        //   text: "Develop",
        //   collapsed: true,
        //   items: [
        //     {
        //       text: "Init",
        //       link: "/build/develop/init",
        //     },
        //     {
        //       text: "Register",
        //       link: "/build/develop/register",
        //     },
        //     {
        //       text: "Build",
        //       link: "/build/develop/build",
        //     },
        //     {
        //       text: "Deploy",
        //       link: "/build/develop/deploy",
        //     },
        //   ],
        // },
        // {
        //   text: "Plugins",
        //   collapsed: true,
        //   items: [
        //     {
        //       text: "Playground",
        //       link: "/build/plugins/playground",
        //     },
        //     {
        //       text: "Make your own",
        //       link: "/build/plugins/make-your-own",
        //     },
        //   ],
        // },
      ],
    },
    {
      text: "Changelog",
      link: "/changelog",
    },
  ],
});
