import React, { useState } from "react";
import { TonConnectButton, TonConnectUI } from "@tonconnect/ui-react";

const App: React.FC = () => {
  const [walletInfo, setWalletInfo] = useState<any>(null);

  const handleConnect = async () => {
    try {
      const tonConnectUI = new TonConnectUI({
        manifestUrl: `${window.location.origin}/tonconnect-manifest.json`,
      });

      const wallet = await tonConnectUI.connect();
      setWalletInfo(wallet);
      console.log("Connected wallet:", wallet);
    } catch (error) {
      console.error("Connection failed:", error);
    }
  };

  return (
    <div>
      {/* TonConnect UI Button */}
      <TonConnectButton
        manifestUrl={`${window.location.origin}/tonconnect-manifest.json`}
        onConnect={(wallet) => setWalletInfo(wallet)}
      />

      {/* Optional Custom Button */}
      <button onClick={handleConnect}>Connect via Popup</button>

      {/* Show connected wallet info */}
      {walletInfo && (
        <div>
          <p>Wallet Connected!</p>
          <p>Address: {walletInfo.account.address}</p>
          <p>Network: {walletInfo.account.network}</p>
        </div>
      )}
    </div>
  );
};

export default App;
