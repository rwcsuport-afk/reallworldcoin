import Web3 from "web3";
import EthereumProvider from "@walletconnect/ethereum-provider";

let web3;
let provider;
let userAddress = null;

// Your receiving wallet (project wallet)
const RECEIVING_WALLET = "0x0a1ad99042f75253faaaA5a448325e7c0069E9fd";
// Conversion rate: 1 BNB = 1000 tokens (adjust if needed)
const TOKEN_RATE = 1000;

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
        provider = await EthereumProvider.init({
            projectId: "33238a5bc1832f91c6d3e33e4996f41f", // your projectId
            chains: [56], // Binance Smart Chain Mainnet
            rpc: {
                56: "https://bsc-dataseed.binance.org/",
            },
            showQrModal: true,
        });

        await provider.enable();
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
            `Transaction successful! You bought ${tokens} $PEPETO tokens. TxHash: ${tx.transactionHash}`;

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