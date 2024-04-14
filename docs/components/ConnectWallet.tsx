import { ConnectButton } from "@rainbow-me/rainbowkit";

export const ConnectWallet = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <div className="flex items-center justify-center">
                    <button
                      onClick={openConnectModal}
                      type="button"
                      className="bg-teal-primary w-44 h-9 px-4 rounded-lg ring-2 ring-teal-primary/25 text-black font-jetbrains font-bold"
                    >
                      Connect Wallet
                    </button>
                  </div>
                );
              }
              if (chain.unsupported) {
                return (
                  <div className="flex items-center justify-center">
                    <button
                      onClick={openChainModal}
                      type="button"
                      className="bg-error-med w-44 h-9 px-4 rounded-lg ring-2 ring-error-med/25 text-black font-jetbrains font-bold"
                    >
                      Switch Network
                    </button>
                  </div>
                );
              }
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
