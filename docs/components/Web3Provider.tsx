import { createWeb3Modal } from "@web3modal/wagmi/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { walletConnectProjectId } from "../constants";

// 0. Setup queryClient
export const queryClient = new QueryClient();

export const projectId = walletConnectProjectId;

const sepoliaEuRPC = {
  ...sepolia,
  rpcUrls: {
    default: {
      http: ["https://rpc2.sepolia.org/"],
    },
  },
};

const config = createConfig({
  chains: [sepoliaEuRPC],
  transports: {
    [sepoliaEuRPC.id]: http(),
  },
  connectors: [injected({ shimDisconnect: true })],
  ssr: true,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  themeMode: "dark",
  themeVariables: {
    "--w3m-accent": "#00CECE",
    "--w3m-z-index": 50,
    "--w3m-border-radius-master": "1px",
    "--w3m-font-family": "JetBrains Mono, monospace",
  },
});

export const Web3Provider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};
