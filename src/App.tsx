import React, { useState } from "react";
import { TonConnect } from "@tonconnect/ui-react";
import "./index.css";

const manifestUrl = "https://cpxmajor.gtrsadikbd.shop/tonconnect-manifest.json";

const App: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const tonConnect = new TonConnect({
    manifestUrl: manifestUrl
  });

  const connectWallet = async () => {
    try {
      const wallet = await tonConnect.connectWallet();
      setWalletAddress(wallet.ton_addr);
      alert("✅ Wallet Connected: " + wallet.ton_addr);
      console.log(wallet);
    } catch (err) {
      console.error("Failed to connect wallet:", err);
      alert("❌ Connection failed. Check console.");
    }
  };

  return (
    <div>
      <h1>Rich Bums TON Connect</h1>
      <p>Click the button to connect your wallet</p>
      <button className="connect-btn" onClick={connectWallet}>
        Connect Wallet
      </button>

      {walletAddress && (
        <p className="wallet-address">Connected Wallet: {walletAddress}</p>
      )}
    </div>
  );
};

export default App;
