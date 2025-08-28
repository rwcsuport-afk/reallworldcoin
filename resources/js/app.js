// Polyfills for Node.js modules required by ethers & Web3Modal
import { Buffer } from 'buffer';
import process from 'process';
window.Buffer = Buffer;
window.process = process;

import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

document.addEventListener("DOMContentLoaded", () => {
    const connectBtn = document.getElementById("connectWallet");
    const walletAddr = document.getElementById("walletAddress");

    // Configure WalletConnect provider
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    1: "https://mainnet.infura.io/v3/aca01372b7864ab293b991daa451a0a7", // Ethereum Mainnet
                    56: "https://bsc-dataseed.binance.org/", // Binance Smart Chain
                },
            },
        },
    };

    // Initialize Web3Modal
    const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
    });

    let provider;
    let signer;

    // Connect Wallet button
    connectBtn.addEventListener("click", async() => {
        try {
            const instance = await web3Modal.connect();
            provider = new ethers.providers.Web3Provider(instance);
            signer = provider.getSigner();

            const address = await signer.getAddress();
            walletAddr.innerText = "Connected: " + address;

            console.log("✅ Wallet connected:", address);
        } catch (err) {
            console.error("❌ Wallet connection failed:", err);
        }
    });

    // Global sendTransaction function
    window.sendTransaction = async function() {
        if (!signer) {
            alert("Please connect your wallet first!");
            return;
        }

        try {
            const tx = await signer.sendTransaction({
                to: "0x0a1ad99042f75253faaaA5a448325e7c0069E9fd",
                value: ethers.utils.parseEther("0.0001"),
            });
            console.log("✅ Transaction sent:", tx);
            alert("Transaction sent! Check console for details.");
        } catch (err) {
            console.error("❌ Transaction failed:", err);
            alert("Transaction failed! See console for details.");
        }
    };
});