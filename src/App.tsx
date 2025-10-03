import React from 'react';
import { TonConnectUIProvider, TonConnectButton } from '@tonconnect/ui';

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://cpxmajor.gtrsadikbd.shop/tonconnect-manifest.json">
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>CPXMajor TON Connect DApp</h1>
        <TonConnectButton />
      </div>
    </TonConnectUIProvider>
  );
}

export default App;
