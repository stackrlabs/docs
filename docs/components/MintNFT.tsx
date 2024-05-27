import type { QueryKey } from "@tanstack/react-query";
import { useEffect } from "react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { nftContract } from "../constants";
import { queryClient } from "./Web3ModalProvider";

interface WhitelistedNotOwnerProps {
  accessQuery: QueryKey;
}

export const MintNFT = ({ accessQuery }: WhitelistedNotOwnerProps) => {
  const { data: hash, writeContract, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });
  const disabled = isConfirming || isPending;
  const buttonClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  useEffect(() => {
    if (isConfirmed) {
      queryClient.invalidateQueries({ queryKey: accessQuery });
    }
  }, [isConfirmed]);

  return (
    <div className="flex flex-col gap-6 items-center">
      <span>
        🎉 Congrats, you have been approved to mint Beta Pass.
        <br />
        Mint this NFT to be able to start deploying micro-rollups.
      </span>
      <button
        className={`bg-teal-primary w-44 h-9 px-4 rounded-lg ring-2 ring-teal-primary/25 text-black font-jetbrains font-bold ${buttonClass}`}
        onClick={() => {
          writeContract({
            ...nftContract,
            functionName: "mint",
            args: [],
          });
        }}
        disabled={disabled || isPending}
      >
        {disabled || isPending ? "Minting..." : "Mint NFT"}
      </button>
    </div>
  );
};
