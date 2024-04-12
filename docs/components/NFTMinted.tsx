import { useEffect, useState } from "react";
import { useAccount, useReadContract } from "wagmi";
import { nftContract } from "../constants";

interface NFTMetadata {
  name: string;
  external_url: string;
  image: string;
  description: string;
}

export const NFTMinted = () => {
  const { address } = useAccount();

  const { data: nftMetaUrl } = useReadContract({
    ...nftContract,
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
        Reach out to use on our{" "}
        <a
          className="underline"
          href={"https://discord.com/invite/PY4nhg7bcc"}
          target="_blank"
          rel="noreferrer"
        >
          Discord Channel
        </a>{" "}
        to get started with deploying
      </span>
      <br />
      <br />

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
