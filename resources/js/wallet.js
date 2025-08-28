import Web3 from "web3";
import EthereumProvider from "@walletconnect/ethereum-provider";
import "@walletconnect/modal";

let web3;
let provider = null;
let userAddress = null;

// Your receiving wallet (project wallet)
const RECEIVING_WALLET = "0x0a1ad99042f75253faaaA5a448325e7c0069E9fd";
// Conversion rate: 1 BNB = 1000 tokens (adjust if needed)
const TOKEN_RATE = 1000;

// ✅ Initialize WalletConnect provider ONCE
async function initWalletConnect() {
    if (!provider) {
        provider = await EthereumProvider.init({
            projectId: "33238a5bc1832f91c6d3e33e4996f41f", // your WC projectId
            chains: [56], // REQUIRED → Binance Smart Chain (Mainnet)
            optionalChains: [97], // OPTIONAL → BSC Testnet if you want
            rpc: {
                56: "https://bsc-dataseed.binance.org/", // Mainnet
                97: "https://data-seed-prebsc-1-s1.binance.org:8545/", // Testnet
            },
            metadata: {
                name: "My DApp",
                description: "BNB to Token Swap",
                url: "https://your-dapp.com", // must be a valid URL
                icons: ["https://your-dapp.com/icon.png"], // small logo (optional)
            },
            showQrModal: true,
        });

        provider.on("disconnect", () => {
            userAddress = null;
            document.getElementById("walletAddress").innerText = "Disconnected";
            console.log("WalletConnect disconnected");
        });
    }
}


async function connectMetaMask() {
    try {
        if (!window.ethereum) {
            alert("MetaMask not found. Please install it.");
            return;
        }

        provider = window.ethereum;
        await provider.request({ method: "eth_requestAccounts" });
        web3 = new Web3(provider);

        const accounts = await web3.eth.getAccounts();
        userAddress = accounts[0];

        document.getElementById("walletAddress").innerText = `Connected: ${userAddress}`;
        console.log("MetaMask connected:", userAddress);

    } catch (err) {
        console.error("MetaMask connection error:", err);
        alert("MetaMask connection failed!");
    }
}

async function connectWalletConnect() {
    try {
        await initWalletConnect(); // ✅ only once
        await provider.connect(); // ✅ triggers QR modal if not already paired

        web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        userAddress = accounts[0];

        document.getElementById("walletAddress").innerText = `Connected: ${userAddress}`;
        console.log("WalletConnect connected:", userAddress);

    } catch (err) {
        console.error("WalletConnect connection error:", err);
        alert("WalletConnect connection failed!");
    }
}

async function buyTokens() {
    if (!web3 || !userAddress) {
        alert("Please connect your wallet first!");
        return;
    }

    try {
        const bnbAmount = document.getElementById("bnbAmount").value;
        if (!bnbAmount || bnbAmount <= 0) {
            alert("Enter a valid BNB amount.");
            return;
        }

        // Convert BNB to Wei
        const valueInWei = web3.utils.toWei(bnbAmount.toString(), "ether");

        // Send BNB to project wallet
        const tx = await web3.eth.sendTransaction({
            from: userAddress,
            to: RECEIVING_WALLET,
            value: valueInWei,
        });

        // Calculate tokens
        const tokens = bnbAmount * TOKEN_RATE;

        document.getElementById("result").innerText =
            `✅ Transaction successful! You bought ${tokens} $PEPETO tokens. TxHash: ${tx.transactionHash}`;

        console.log("Transaction successful:", tx);

    } catch (err) {
        console.error("Transaction failed:", err);
        alert("Transaction failed. Check console for details.");
    }
}

// Attach events to buttons
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("connectMetaMask").onclick = connectMetaMask;
    document.getElementById("connectWC").onclick = connectWalletConnect;
    document.getElementById("buyTokens").onclick = buyTokens;
});