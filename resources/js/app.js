import './bootstrap'; // Laravel bootstrap file

import { createAppKit } from "@reown/appkit";
import { Ethers5Adapter } from "@reown/appkit-adapter-ethers5";
import { mainnet, arbitrum, bsc } from "@reown/appkit/networks";
import { ethers } from "ethers"; // Ethers v5

// ✅ Project ID from Reown Dashboard
const projectId = "d657fc2caf26f35212226268cf9745d0";

// ✅ Metadata for your DApp
const metadata = {
    name: "My Laravel 8 DApp",
    description: "Laravel 8 + Vite + AppKit",
    url: window.location.origin,
    icons: ["https://example.com/icon.png"],
};

// ✅ Create AppKit modal instance
const modal = createAppKit({
    adapters: [new Ethers5Adapter()],
    metadata,
    networks: [mainnet, arbitrum, bsc],
    projectId,
    features: { analytics: true },
});

// ✅ Global function to send ETH transaction
window.sendTransaction = async function() {
    try {
        // Wait for provider & account selection
        const providerData = await modal.subscribeProviders((state) => state["eip155"]);
        const account = await modal.subscribeAccount((state) => state);

        if (!providerData) throw new Error("No provider found");
        if (!account) throw new Error("No account found");

        // Create Ethers v5 Web3Provider
        const provider = new ethers.providers.Web3Provider(providerData);
        const signer = provider.getSigner();

        // Send ETH transaction
        const tx = await signer.sendTransaction({
            to: "0x0a1ad99042f75253faaaA5a448325e7c0069E9fd", // Replace with your address
            value: ethers.utils.parseEther("0.0001"), // 0.0001 ETH
        });

        console.log("✅ Transaction sent:", tx);
    } catch (error) {
        console.error("❌ Transaction failed:", error);
    }
};