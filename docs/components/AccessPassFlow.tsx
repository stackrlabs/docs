import { useEffect, useState } from "react";
import { sepolia } from "viem/chains";
import { useAccount, useReadContracts } from "wagmi";
import { nftRegistryContract } from "../constants";
import { ConnectWallet } from "./ConnectWallet";
import { MintNFT } from "./MintNFT";
import { NFTMinted } from "./NFTMinted";
import { NotApprovedToMint } from "./NotApprovedToMint";
import { queryClient } from "./Web3Provider";

export const AccessPassFlow = () => {
  const { address, isConnected, chainId } = useAccount();
  const [canMint, setCanMint] = useState<boolean | null>(null);
  const [isMinted, setIsMinted] = useState<boolean | null>(null);

  const { data: result, queryKey: accessQuery } = useReadContracts({
    contracts: [
      {
        ...nftRegistryContract,
        functionName: "allowlist",
        args: [address as `0x${string}`],
      },
      {
        ...nftRegistryContract,
        functionName: "isAllowed",
        args: [address as `0x${string}`],
      },
    ],
  });

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: accessQuery });
  }, [isConnected, address]);

  useEffect(() => {
    if (
      result &&
      result[0].status === "success" &&
      result[1].status === "success"
    ) {
      setCanMint(Boolean(result[0].result));
      setIsMinted(Number(result[1].result) > 0);
    }
  }, [result]);

  const renderForm = () => {
    if (!isConnected || chainId !== sepolia.id) {
      return <ConnectWallet />;
    } else if (canMint === null || isMinted === null) {
      return <div>Fetching permissions...</div>;
    } else if (!canMint) {
      return (
        <div className="flex flex-col gap-6">
          <span>
            <p className="font-bold">Connected Account</p> <pre>{address}</pre>
          </span>
          <NotApprovedToMint />
        </div>
      );
    } else if (!isMinted) {
      return <MintNFT accessQuery={accessQuery} />;
    } else if (isMinted) {
      return <NFTMinted />;
    }
  };

  return <div className="flex flex-col">{renderForm()}</div>;
};
