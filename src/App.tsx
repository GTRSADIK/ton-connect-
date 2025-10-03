import React from 'react';
import { useTonConnectUI } from '@tonconnect/ui-react';

const App: React.FC = () => {
  const [tonConnectUI, setOptions] = useTonConnectUI();

  const openModal = () => {
    tonConnectUI.openWalletModal();
  };

  return (
    <div>
      <h1>CPXMajor TON Connect</h1>
      <button onClick={openModal}>Connect Wallet</button>
    </div>
  );
};

export default App;
