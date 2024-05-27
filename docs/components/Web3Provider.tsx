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
