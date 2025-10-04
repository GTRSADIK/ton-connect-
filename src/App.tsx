import React, { useState } from "react";
import { TonConnectButton, TonConnectUI } from "@tonconnect/ui-react";

const App: React.FC = () => {
  const [walletInfo, setWalletInfo] = useState<any>(null);

  const handleConnect = async () => {
    try {
      const tonConnectUI = new TonConnectUI({
        manifestUrl: `${window.location.origin}/tonconnect-manifest.json`
      });

      const wallet = await tonConnectUI.connect();
      setWalletInfo(wallet); // সংরক্ষণ কানেক্টেড ওয়ালেট ইনফো
      console.log("Connected wallet:", wallet);
    } catch (error) {
      console.error("Connection failed:", error);
    }
  };

  return (
    <div style={{ padding: "20px", color: "#fff", background: "#3c2917", minHeight: "100vh" }}>
      <h1>Connect your TON Wallet</h1>

      {/* UI React TonConnect Button */}
      <TonConnectButton
        manifestUrl={`${window.location.origin}/tonconnect-manifest.json`}
        onConnect={(wallet) => setWalletInfo(wallet)}
      />

      {walletInfo && (
        <div style={{ marginTop: "20px", padding: "10px", background: "#44280f", borderRadius: "10px" }}>
          <h2>Wallet Connected!</h2>
          <p>Address: {walletInfo.account.address}</p>
          <p>Network: {walletInfo.account.network}</p>
        </div>
      )}

      {/* Custom Button (optional) */}
      <button
        style={{ marginTop: "20px", padding: "10px 20px", background: "#ffb443", border: "none", borderRadius: "8px", cursor: "pointer" }}
        onClick={handleConnect}
      >
        Connect via Popup
      </button>
    </div>
  );
};

export default App;
