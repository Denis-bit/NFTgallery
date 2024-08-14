// import React from 'react';
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
// import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
// import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
// import { clusterApiUrl } from '@solana/web3.js';
// import NftGallery from './NftGallery';

// require('@solana/wallet-adapter-react-ui/styles.css');

// const App: React.FC = () => {
//     const network = WalletAdapterNetwork.Devnet;
//     const endpoint = clusterApiUrl(network);
//     const wallets = [new PhantomWalletAdapter()];

//     return (
//         <ConnectionProvider endpoint={endpoint}>
//             <WalletProvider wallets={wallets} autoConnect>
//                 <WalletModalProvider>
//                     <NftGallery />
//                 </WalletModalProvider>
//             </WalletProvider>
//         </ConnectionProvider>
//     );
// };

// export default App;

import React from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import NftGallery from './NftGallery';

require('@solana/wallet-adapter-react-ui/styles.css');

const App: React.FC = () => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = clusterApiUrl(network);
    const wallets = [new PhantomWalletAdapter()];

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <div>
                        <WalletMultiButton />
                        <NftGallery />
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default App;
