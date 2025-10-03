import React from 'react';
import { TonConnectUI } from '@tonconnect/ui';

const tonConnectUI = new TonConnectUI({
  manifestUrl: 'https://cpxmajorton.vercel.app/public/tonconnect-manifest.json'
});

const App: React.FC = () => {
  const connectWallet = async () => {
    try {
      const wallet = await tonConnectUI.connect();
      alert('✅ Wallet connected: ' + wallet!.account);
      console.log(wallet);
    } catch (err) {
      console.error('Connection failed:', err);
      alert('❌ Connection failed');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>CPX MAJOR TON Connect</h1>
      <button
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        onClick={connectWallet}
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default App;
