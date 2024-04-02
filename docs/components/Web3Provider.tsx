import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: "Stackr Explorer",
  projectId: "YOUR_PROJECT_ID",
  chains: [mainnet],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

export const Web3Provider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: "#00CECE",
            accentColorForeground: "black",
            borderRadius: "small",
            fontStack: "system",
            overlayBlur: "small",
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
