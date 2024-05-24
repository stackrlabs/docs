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
            link: "/beta/beta-access",
            image: "/assets/icons/beta.svg",
          },
          {
            name: "Concepts",
            link: "/concepts/micro-rollup/introduction",
            image: "/assets/icons/concepts.svg",
          },
          {
            name: "Tutorial",
            link: "/build/zero-to-one/getting-started",
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
      link: "/build/zero-to-one/getting-started",
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
          link: "/build/changelog",
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
  sidebar: {
    "/beta/": [
      {
        text: "Beta Access",
        link: "/beta/beta-access",
      },
      {
        text: "Mint Pass",
        link: "/beta/mint-access",
      },
      {
        text: "What to build?",
        link: "/beta/what-to-build",
      },
      {
        text: "",
        items: [
          {
            text: "Learn Concepts",
            link: "/concepts/micro-rollup/introduction",
          },
          {
            text: "Start Building",
            link: "/build/zero-to-one/getting-started",
          },
        ],
      },
    ],
    "/concepts/": [
      {
        text: "Micro-Rollups",
        link: "/concepts/micro-rollup/introduction",
      },
      {
        text: "Motivation",
        items: [
          {
            text: "Traditional Rollups",
            link: "/concepts/micro-rollup/motivation/traditional-rollups",
          },
          {
            text: "Single App Rollups",
            link: "/concepts/micro-rollup/motivation/single-app-rollups",
          },
          {
            text: "Microservices",
            link: "/concepts/micro-rollup/motivation/microservices",
          },
          {
            text: "Modularity",
            link: "/concepts/micro-rollup/motivation/modularity",
          },
          {
            text: "Sufficient Decentralization",
            link: "/concepts/micro-rollup/motivation/sufficient-decentralization",
          },
        ],
      },
      {
        text: "Architecture",
        items: [
          {
            text: "Overview",
            link: "/concepts/micro-rollup/architecture/overview",
          },
          {
            text: "Utility Modes",
            link: "/concepts/micro-rollup/utility",
          },
          {
            text: "Settlement Modes",
            link: "/concepts/micro-rollup/settlement",
          },
          {
            text: "Execution Layer",
            link: "/concepts/micro-rollup/architecture/execution-layer",
          },
          {
            text: "Verification Layer",
            link: "/concepts/micro-rollup/architecture/verification-layer",
          },
        ],
      },
      {
        text: "Security",
        items: [
          {
            text: "Assumptions",
            link: "/concepts/security/assumptions",
          },
          {
            text: "Data Settlement",
            collapsed: true,
            items: [
              {
                text: "Off-chain data",
                link: "/concepts/security/data-settlement/Off-chain-storage",
              },
              {
                text: "On-chain data",
                link: "/concepts/security/data-settlement/On-chain-storage",
              },
            ],
          },
        ],
      },
      {
        text: "Economics",
        link: "/concepts/micro-rollup/economics",
      },
      {
        text: "",
        items: [
          {
            text: "Apply for Beta",
            link: "/beta/beta-access",
          },
          {
            text: "Start Building",
            link: "/build/zero-to-one/getting-started",
          },
        ],
      },
    ],
    "/build/": [
      {
        text: "",
        items: [
          {
            text: "Zero-to-One",
            collapsed: true,
            items: [
              {
                text: "Getting Started",
                link: "/build/zero-to-one/getting-started",
              },
              {
                text: "First Micro-rollup",
                link: "/build/zero-to-one/build-your-first-mru",
              },
              {
                text: "Let's run it",
                link: "/build/zero-to-one/run-it",
              },
            ],
          },
          {
            text: "New Dev Paradigm",
            link: "/build/development-paradigm",
          },
          {
            text: "Configuration",
            link: "/build/references/providers-and-rpc",
          },
          {
            text: "Frequently Asked Questions",
            link: "/build/faq",
          },
        ],
      },
      {
        text: "Guides",
        items: [
          {
            text: "Community Examples",
            link: "/build/guides/community-examples",
          },
          {
            text: "Tutorials",
            collapsed: true,
            items: [
              {
                text: "Counter MRU",
                link: "/build/guides/tutorials/counter",
              },
            ],
          },
        ],
      },
      {
        text: "Framework",
        collapsed: true,
        items: [
          {
            text: "Stackr Config",
            link: "/build/framework/config",
          },
          {
            text: "State Machine",
            collapsed: true,
            items: [
              {
                text: "Introduction",
                link: "/build/framework/state-machine/introduction",
              },
              {
                text: "State",
                link: "/build/framework/state-machine/state",
              },
              {
                text: "Genesis State",
                link: "/build/framework/state-machine/genesis-state",
              },
              {
                text: "State Transitions",
                link: "/build/framework/state-machine/state-transitions",
              },
              {
                text: "Global Variables",
                link: "/build/framework/global-variables",
              },
            ],
          },
          {
            text: "Action",
            collapsed: true,
            items: [
              {
                text: "Introduction",
                link: "/build/framework/action/introduction",
              },
              {
                text: "Action Schema",
                link: "/build/framework/action/action-schema",
              },
              {
                text: "Lifecycle",
                link: "/build/framework/action/lifecycle",
              },
              {
                text: "Execution Status",
                link: "/build/framework/action/execution-status",
              },
              {
                text: "Confirmation Status",
                link: "/build/framework/action/confirmation-status",
              },
            ],
          },
          {
            text: "Block",
            link: "/build/framework/block",
          },
          {
            text: "Micro-Rollup",
            link: "/build/framework/micro-rollup",
          },
          {
            text: "Micro-Rollup Utils",
            link: "/build/framework/micro-rollup-utils",
          },
          { text: "Events", link: "/build/framework/events" },
          {
            text: "Sequencer",
            link: "/build/framework/sequencer",
          },
          // {
          //   text: "Executor",
          //   link: "/build/framework/executor",
          // },
        ],
      },
      {
        text: "CLI",
        collapsed: true,
        items: [
          {
            text: "Introduction",
            link: "/build/cli/introduction",
          },
          {
            text: "Initialize",
            link: "/build/cli/init",
          },
          {
            text: "Register",
            link: "/build/cli/register",
          },
          {
            text: "Deploy",
            link: "/build/cli/deploy",
          },
          {
            text: "Add Bridge",
            link: "/build/cli/add-bridge",
          },
        ],
      },
      {
        text: "Plugins",
        collapsed: true,
        items: [
          {
            text: "Playground",
            link: "/build/plugins/playground",
          },
          {
            text: "Bridging",
            link: "/build/plugins/bridging",
          },
        ],
      },
      {
        text: "Advanced",
        collapsed: true,
        items: [
          {
            text: "Check your Binaries",
            link: "/build/guides/checking-your-binaries",
          },
        ],
      },
      {
        text: "",
        items: [
          {
            text: "Changelog",
            link: "/build/changelog",
          },
        ],
      },
      {
        text: "",
        items: [
          {
            text: "Apply for Beta",
            link: "/beta/beta-access",
          },
          {
            text: "Learn Concepts",
            link: "/concepts/micro-rollup/introduction",
          },
        ],
      },
    ],
  },
});
