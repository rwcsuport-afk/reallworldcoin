import Web3 from "web3";
import EthereumProvider from "@walletconnect/ethereum-provider";

let web3;
let provider = null;
let userAddress = null;

const RECEIVING_WALLET = "0x0a1ad99042f75253faaaA5a448325e7c0069E9fd";
const TOKEN_RATE = 1000;

// ✅ Initialize WalletConnect provider (only once)
async function initWalletConnect() {
    if (!provider) {
        provider = await EthereumProvider.init({
            projectId: "33238a5bc1832f91c6d3e33e4996f41f",
            chains: [56], // BSC
            rpcMap: {
                56: "https://bsc-dataseed.binance.org/"
            },
            methods: [
                "eth_sendTransaction",
                "personal_sign",
                "eth_signTypedData"
            ],
            events: ["chainChanged", "accountsChanged", "disconnect"],
            metadata: {
                name: "My DApp",
                description: "BNB to Token Swap",
                url: window.location.origin,
                icons: ["https://your-dapp.com/icon.png"]
            },
            showQrModal: true
        });

        // Handle disconnect event
        provider.on("disconnect", () => {
            userAddress = null;
            document.getElementById("walletAddress").innerText = "Disconnected";
            console.log("WalletConnect disconnected");
        });
    }
}

// ✅ Connect MetaMask
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

// ✅ Connect WalletConnect (force show QR modal, prevent auto-reconnect)
async function connectWalletConnect() {
    try {
        // ✅ If there's an active WalletConnect session, disconnect first
        if (provider && provider.session) {
            await provider.disconnect();
            provider = null; // Reset provider
        }

        // ✅ Initialize a fresh provider instance
        provider = await EthereumProvider.init({
            projectId: "33238a5bc1832f91c6d3e33e4996f41f",
            chains: [56], // Binance Smart Chain
            rpcMap: {
                56: "https://bsc-dataseed.binance.org/"
            },
            methods: [
                "eth_sendTransaction",
                "personal_sign",
                "eth_signTypedData"
            ],
            events: ["chainChanged", "accountsChanged"],
            metadata: {
                name: "My DApp",
                description: "BNB to Token Swap",
                url: window.location.origin,
                icons: ["https://your-dapp.com/icon.png"]
            },
            showQrModal: true // ✅ Force show QR modal
        });

        // ✅ Show QR Modal for a new connection
        await provider.connect({ showQrModal: true });

        web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        userAddress = accounts[0];

        document.getElementById("walletAddress").innerText = `Connected: ${userAddress}`;
        console.log("✅ WalletConnect connected:", userAddress);

    } catch (err) {
        console.error("❌ WalletConnect connection error:", err);
        alert("WalletConnect connection failed!");
    }
}


// ✅ Buy Tokens
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

        const valueInWei = web3.utils.toWei(bnbAmount.toString(), "ether");

        const tx = await web3.eth.sendTransaction({
            from: userAddress,
            to: RECEIVING_WALLET,
            value: valueInWei
        });

        const tokens = bnbAmount * TOKEN_RATE;
        document.getElementById("result").innerText =
            `✅ Transaction successful! You bought ${tokens} $PEPETO tokens. TxHash: ${tx.transactionHash}`;

        console.log("Transaction successful:", tx);
    } catch (err) {
        console.error("Transaction failed:", err);
        alert("Transaction failed. Check console for details.");
    }
}

// ✅ Attach events
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("connectMetaMask").onclick = connectMetaMask;
    document.getElementById("connectWC").onclick = connectWalletConnect;
    document.getElementById("buyTokens").onclick = buyTokens;
});