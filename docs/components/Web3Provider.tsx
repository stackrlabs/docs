import {
  RainbowKitProvider,
  darkTheme,
  getDefaultConfig,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { sepolia } from "wagmi/chains";
import { walletConnectProjectId } from "../constants";

// This is faster than using the default RPC
const sepoliaEuRPC = {
  ...sepolia,
  rpcUrls: {
    default: {
      http: ["https://rpc2.sepolia.org/"],
    },
  },
};

const config = getDefaultConfig({
  appName: "Stackr Docs",
  projectId: walletConnectProjectId,
  chains: [sepoliaEuRPC],
  ssr: true,
});

export const queryClient = new QueryClient();

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
