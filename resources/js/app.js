import './bootstrap';
import { createAppKit } from "@reown/appkit";
import { Ethers5Adapter } from "@reown/appkit-adapter-ethers5";
import { mainnet, arbitrum, bsc } from "@reown/appkit/networks";
import { ethers } from "ethers";

// Reown Project ID
const projectId = "d657fc2caf26f35212226268cf9745d0";

// App metadata
const metadata = {
    name: "My Laravel 8 DApp",
    description: "Laravel 8 + AppKit",
    url: window.location.origin,
    icons: ["https://example.com/icon.png"],
};

// Initialize AppKit
const appKit = createAppKit({
    adapters: [new Ethers5Adapter()],
    metadata,
    networks: [mainnet, arbitrum, bsc],
    projectId,
    features: { analytics: true },
});

// Expose globally for buttons
window.appKit = appKit;

// Global sendTransaction function
window.sendTransaction = async function() {
    try {
        const providerData = await appKit.subscribeProviders((state) => state["eip155"]);
        const account = await appKit.subscribeAccount((state) => state);

        if (!providerData) throw new Error("No provider found");
        if (!account) throw new Error("No account found");

        const provider = new ethers.providers.Web3Provider(providerData);
        const signer = provider.getSigner();

        const tx = await signer.sendTransaction({
            to: "0x0a1ad99042f75253faaaA5a448325e7c0069E9fd",
            value: ethers.utils.parseEther("0.0001"),
        });

        console.log("✅ Transaction sent:", tx);
    } catch (error) {
        console.error("❌ Transaction failed:", error);
    }
};