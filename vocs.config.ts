import { defineConfig } from "vocs";

export default defineConfig({
  logoUrl: "/logo/dark.svg",
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
  ],
});
