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
                    <div className="bg-teal-connect opacity-25 w-[180px] h-10 rounded-lg" />
                    <button
                      onClick={openConnectModal}
                      type="button"
                      className="primary bg-teal-connect w-44 h-9 px-4 rounded-lg absolute text-black font-jetbrains font-bold"
                    >
                      Connect Wallet
                    </button>
                  </div>
                );
              }
              if (chain.unsupported) {
                return (
                  <div className="flex items-center justify-center">
                    <div className="bg-error-med opacity-25 w-[180px] h-10 rounded-lg" />
                    <button
                      onClick={openChainModal}
                      type="button"
                      className="primary bg-error-med w-44 h-9 px-4 rounded-lg absolute text-black font-jetbrains font-bold"
                    >
                      Wrong network
                    </button>
                  </div>
                );
              }
              return (
                <div className="justify-center flex gap-2 h-10 rounded-xl bg-grey-elevation-2 p-2 font-jetbrains">
                  <button
                    className="text-black h-9 px-4 rounded-lg primary font-jetbrains"
                    onClick={openAccountModal}
                    type="button"
                  >
                    🔗 {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
