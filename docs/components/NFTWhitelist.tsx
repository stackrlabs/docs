import { useAccount, useReadContracts } from "wagmi";
import { ConnectWallet } from "./ConnectWallet";
import { registryContract } from "../constants";
import { useEffect, useState } from "react";
import { sepolia } from "viem/chains";
import { NotWhitelisted } from "./NotWhitelisted";
import { WhitelistedNotOwner } from "./WhitelistedNotOwner";
import { WhiteListedOwner } from "./WhiteListedOwner";
import { queryClient } from "./Web3Provider";

export const NFTWhitelist = () => {
  const { address, isConnected, chainId } = useAccount();
  const [isWhiteListed, setIsWhiteListed] = useState<boolean | null>(null);
  const [isAllowed, setIsAllowed] = useState<boolean | null>(null);

  const { data: result, queryKey: accessQuery } = useReadContracts({
    contracts: [
      {
        ...registryContract,
        functionName: "allowlist",
        args: [address as `0x${string}`],
      },
      {
        ...registryContract,
        functionName: "isAllowed",
        args: [address as `0x${string}`],
      },
    ],
  });

  useEffect(() => {
    if (
      result &&
      result[0].status === "success" &&
      result[1].status === "success"
    ) {
      setIsWhiteListed(Boolean(result[0].result));
      setIsAllowed(Number(result[1].result) > 0);
    }
  }, [result]);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: accessQuery });
  }, [isConnected, address]);

  const renderForm = () => {
    if (!isConnected || chainId !== sepolia.id) {
      return <ConnectWallet />;
    } else if (isWhiteListed === null || isAllowed === null) {
      return <div>Loading...</div>;
    } else if (isWhiteListed === false) {
      return (
        <div className="flex flex-col gap-6">
          <span>Connected Address: {address}</span>
          <NotWhitelisted />
        </div>
      );
    } else if (isWhiteListed && isAllowed === false) {
      return <WhitelistedNotOwner accessQuery={accessQuery} />;
    } else if (isAllowed) {
      return <WhiteListedOwner />;
    }
  };

  return <div className="flex flex-col">{renderForm()}</div>;
};
