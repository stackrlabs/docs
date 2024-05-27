import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from "wagmi";
import { sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { walletConnectProjectId } from "../constants";

// 0. Setup queryClient
export const queryClient = new QueryClient();

export const projectId = walletConnectProjectId;

const metadata = {
  name: "Stackr Docs",
  description: "Stackr Docs",
  url: "https://docs.stf.xyz",
  icons: ["https://docs.stf.xyz/logo/dark.svg"],
};

const sepoliaEuRPC = {
  ...sepolia,
  rpcUrls: {
    default: {
      http: ["https://rpc2.sepolia.org/"],
    },
  },
};

const chains = [sepoliaEuRPC] as const;

const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
  enableOnramp: true,
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
