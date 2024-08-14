// import React, { useEffect, useState } from 'react';
// import { useWallet } from '@solana/wallet-adapter-react';
// import { getParsedNftAccountsByOwner, createConnectionConfig } from '@nfteyez/sol-rayz';
// import { clusterApiUrl } from '@solana/web3.js';

// interface Nft {
//     name: string;
//     uri: string;
// }

// const NftGallery: React.FC = () => {
//     const { publicKey } = useWallet();
//     const [nfts, setNfts] = useState<Nft[]>([]);

//     useEffect(() => {
//         const fetchNfts = async () => {
//             if (publicKey) {
//                 const connection = createConnectionConfig(clusterApiUrl('devnet'));
//                 const nftAccounts = await getParsedNftAccountsByOwner({
//                     publicAddress: publicKey.toBase58(),
//                     connection,
//                 });

//                 const nftData = nftAccounts.map(nft => ({
//                     name: nft.data.name,
//                     uri: nft.data.uri,
//                 }));

//                 setNfts(nftData);
//             }
//         };

//         fetchNfts();
//     }, [publicKey]);

//     return (
//         <div>
//             <h1>NFT Gallery</h1>
//             <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//                 {nfts.map((nft, index) => (
//                     <div key={index} style={{ margin: '10px' }}>
//                         <img src={nft.uri} alt={nft.name} style={{ width: '200px', height: '200px' }} />
//                         <p>{nft.name}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default NftGallery;


import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { getParsedNftAccountsByOwner, createConnectionConfig } from '@nfteyez/sol-rayz';
import { clusterApiUrl } from '@solana/web3.js';

interface Nft {
    name: string;
    uri: string;
}

const NftGallery: React.FC = () => {
    const { publicKey } = useWallet();
    const [nfts, setNfts] = useState<Nft[]>([]);

    useEffect(() => {
        const fetchNfts = async () => {
            if (publicKey) {
                console.log("Fetching NFTs for public key:", publicKey.toBase58());
                const connection = createConnectionConfig(clusterApiUrl('devnet'));
                const nftAccounts = await getParsedNftAccountsByOwner({
                    publicAddress: publicKey.toBase58(),
                    connection,
                });

                const nftData = nftAccounts.map(nft => ({
                    name: nft.data.name,
                    uri: nft.data.uri,
                }));

                console.log("Fetched NFTs:", nftData);
                setNfts(nftData);
            }
        };

        fetchNfts();
    }, [publicKey]);

    return (
        <div>
            <h1>NFT Gallery</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {nfts.map((nft, index) => (
                    <div key={index} style={{ margin: '10px' }}>
                        <img src={nft.uri} alt={nft.name} style={{ width: '200px', height: '200px' }} />
                        <p>{nft.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NftGallery;

