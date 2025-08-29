import "./styles.css";
import ConnectButton from "./components/ConnectButton";
import { useAccount, useBalance } from "wagmi";

export default function App() {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({
    address,
    query: { enabled: !!address },
  });

  return (
    <div className="container">
      <div className="card">
        <h1>Reown AppKit + Wagmi</h1>
        <p>Connect a wallet and view your address and ETH balance.</p>

        <div className="hstack" style={{ marginBottom: 16 }}>
          <ConnectButton />
        </div>

        {isConnected ? (
          <div>
            <p>
              <strong>Address:</strong> <span className="mono">{address}</span>
            </p>
            <p>
              <strong>Balance (ETH):</strong>{" "}
              {balance ? balance.formatted : "…"}
            </p>
            <small>Network: mainnet/arbitrum (configured)</small>
          </div>
        ) : (
          <p>Not connected. Click the button above to connect.</p>
        )}
      </div>
    </div>
  );
}
