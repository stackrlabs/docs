import { defineConfig } from "vocs";

export default defineConfig({
  logoUrl: "/logo/dark.svg",
  iconUrl: "/logo/favicon.svg",
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
      },
    },
  },
  title: "Stackr",
  sidebar: [
    {
      text: "Setup",
      items: [
        {
          text: "Dev Environment",
          link: "/setup/dev-environment",
        },
        {
          text: "SDK Access",
          link: "/setup/SDK-access",
        },
        {
          text: "Stackr Testnet",
          link: "/config/configurations",
        },
      ],
    },
    {
      text: "0-to-1",
      items: [
        {
          text: "Start Here",
          link: "/start/start-here",
        },
        {
          text: "Building First Rollup",
          link: "/start/building-first-rollup",
        },
        {
          text: "Running First Rollup",
          link: "/start/running-first-rollup",
        },
      ],
    },
    {
      text: "Develop",
      items: [
        {
          text: "Before You Begin",
          link: "/develop/before-you-begin",
        },
        {
          text: "State",
          link: "/develop/state",
        },
        {
          text: "Rollup State",
          link: "/develop/rollup-state",
        },
        {
          text: "State Transition Function",
          link: "/develop/state-transition-function",
        },
        {
          text: "Almost Micro Rollup",
          link: "/develop/almost-micro-rollup",
        },
        {
          text: "Stackr Config",
          link: "/develop/stackr-config",
        },
        {
          text: "Builder Sequencer",
          link: "/develop/builder-sequencer",
        },
        {
          text: "Micro Rollup",
          link: "/develop/micro-rollup",
        },
        {
          text: "Micro Rollup Utilities",
          link: "/develop/micro-rollup-utilities",
        },
      ],
    },
  ],
  
});
