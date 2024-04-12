import { useEffect, useState } from "react";
import { useAccount, useReadContract } from "wagmi";
import { phase1Contract } from "../constants";

interface NFTMetadata {
  name: string;
  external_url: string;
  image: string;
  description: string;
}

export const WhiteListedOwner = () => {
  const { address } = useAccount();

  const { data: nftMetaUrl } = useReadContract({
    ...phase1Contract,
    functionName: "tokenURI",
    args: [],
  });

  const [nftMeta, setNftMeta] = useState<NFTMetadata | null>(null);

  useEffect(() => {
    if (nftMetaUrl && typeof nftMetaUrl === "string") {
      fetch(nftMetaUrl)
        .then((res) => res.json())
        .then((data) => setNftMeta(data));
    }
  }, [nftMetaUrl]);

  return (
    <div>
      <span>Congrats, you have access to our SDK and own our NFT. 🥳</span>
      <br />
      <span>
        Reach out to use on our discord channel to get started with deploying
      </span>

      <div className="flex justify-center">
        {nftMeta ? (
          <div className="flex-col text-center items-center">
            <img src={nftMeta.image} alt={nftMeta.name} />
            <a
              className="underline"
              href={`https://testnets.opensea.io/${address}`}
              target="_blank"
              rel="noreferrer"
            >
              View on OpenSea
            </a>
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};
