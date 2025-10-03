import React, { useState } from "react";
import { TonConnectUI, TonConnect } from "@tonconnect/ui-react";

const manifestUrl = "https://cpxmajor.gtrsadikbd.shop/tonconnect-manifest.json";

const App: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  // Initialize TonConnect
  const tonConnect = new TonConnect({
    manifestUrl: manifestUrl
  });

  // Function to connect wallet
  const connectWallet = async () => {
    try {
      const wallet = await tonConnect.connectWallet();
      console.log("Connected wallet:", wallet);
      setWalletAddress(wallet.ton_addr);
      alert("✅ Wallet Connected: " + wallet.ton_addr);
    } catch (err) {
      console.error("Failed to connect wallet:", err);
      alert("❌ Connection failed. Check console.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Rich Bums TON Connect</h1>
      <p>Click the button to connect your wallet</p>
      <button
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          borderRadius: "10px",
          background: "linear-gradient(90deg, #0088cc, #00bfff)",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
        onClick={connectWallet}
      >
        Connect Wallet
      </button>

      {walletAddress && (
        <p style={{ marginTop: "20px" }}>
          Connected Wallet: <b>{walletAddress}</b>
        </p>
      )}
    </div>
  );
};

export default App;
