import React, { useState } from "react";
import { TonConnect } from "@tonconnect/sdk";

const manifestUrl = "https://raw.githubusercontent.com/GTRSADIK/ton-connect-/refs/heads/main/public/tonconnect-manifest.json";
const connector = new TonConnect({ manifestUrl });

export default function App() {
  const [wallet, setWallet] = useState<any>(null);

  async function connectWallet() {
    try {
      const walletConnection = await connector.connectWallet();
      setWallet(walletConnection);
      alert("✅ Wallet connected successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Connection failed!");
    }
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#0f172a",
      color: "white"
    }}>
      <h1>TON Connect Demo</h1>
      {!wallet ? (
        <button
          onClick={connectWallet}
          style={{
            background: "#0891b2",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Connect Wallet
        </button>
      ) : (
        <p>Wallet Connected ✅</p>
      )}
    </div>
  );
        }
