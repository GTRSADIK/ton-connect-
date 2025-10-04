import { useEffect } from "react";

declare global {
  interface Window {
    TonWeb: any;
    TonConnect: any;
  }
}

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/tonweb@0.0.42/dist/tonweb.min.js";
    script.async = true;
    script.onload = () => {
      console.log("TonWeb loaded", window.TonWeb);

      const manifestUrl = "https://raw.githubusercontent.com/GTRSADIK/ton-connect-/main/public/tonconnect-manifest.json";

      // এখানে TonConnect logic implement করতে হবে
      // window.TonConnect.init(manifestUrl) বা similar
      console.log("Using TonConnect Manifest from:", manifestUrl);
    };
    document.body.appendChild(script);
  }, []);

  return <div>GTR BUMS TonConnect App</div>;
}

export default App;
