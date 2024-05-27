import { useWeb3Modal } from "@web3modal/wagmi/react";

export const ConnectWallet = () => {
  const { open } = useWeb3Modal();
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => open()}
        type="button"
        className="cursor-pointer bg-teal-primary w-44 h-9 px-4 rounded-lg ring-2 ring-teal-primary/25 text-black font-jetbrains font-bold"
      >
        Connect Wallet
      </button>
    </div>
  );
};
