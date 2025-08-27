require('./bootstrap');

import { createAppKit } from "@reown/appkit";
import { Ethers5Adapter } from "@reown/appkit-adapter-ethers5";
import { mainnet, arbitrum, bsc } from "@reown/appkit/networks";
import { ethers } from "ethers"; // v5 import

// 1. Project ID from Reown Dashboard
const projectId = "d657fc2caf26f35212226268cf9745d0";

// 2. Metadata
const metadata = {
    name: "My Laravel 8 DApp",
    description: "Laravel 8 + AppKit",
    url: window.location.origin,
    icons: ["https://example.com/icon.png"],
};

// 3. Create AppKit instance
const modal = createAppKit({
    adapters: [new Ethers5Adapter()],
    metadata,
    networks: [mainnet, arbitrum, bsc],
    projectId,
    features: { analytics: true },
});

// Send ETH example
window.sendTransaction = async function() {
    const providerData = await modal.subscribeProviders((state) => state["eip155"]);
    const addressFrom = await modal.subscribeAccount((state) => state);

    if (!providerData) throw new Error("No provider found");
    if (!addressFrom) throw new Error("No address found");

    // Ethers v5 Web3Provider
    const provider = new ethers.providers.Web3Provider(providerData);
    const signer = provider.getSigner();

    const tx = await signer.sendTransaction({
        to: "0x0a1ad99042f75253faaaA5a448325e7c0069E9fd", // replace with your address
        value: ethers.utils.parseEther("0.0001"), // v5 syntax
    });

    console.log("Transaction sent:", tx);
};