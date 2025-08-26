import Web3 from "web3";
import EthereumProvider from "@walletconnect/ethereum-provider";

let web3;
let userAddress = null;
let provider = null;

// Conversion rate: 1 BNB = 1000 Tokens
const TOKEN_RATE = 1000;

// Receiving wallet (your project wallet)
const RECEIVING_WALLET = "0x0a1ad99042f75253faaaA5a448325e7c0069E9fd";

// USDT BEP20 contract on BSC
const USDT_ADDRESS = "0x55d398326f99059fF775485246999027B3197955";
const USDT_ABI = [{
    constant: false,
    inputs: [
        { name: "_to", type: "address" },
        { name: "_value", type: "uint256" }
    ],
    name: "transfer",
    outputs: [{ name: "", type: "bool" }],
    type: "function"
}];

// WalletConnect Project ID (hardcoded for now)
const WALLET_CONNECT_PROJECT_ID = "d657fc2caf26f35212226268cf9745d0";

document.addEventListener("DOMContentLoaded", function() {
    const connectButton = document.getElementById("connectWallet");
    const buyButton = document.getElementById("buyWithBNB");
    const payAmountInput = document.getElementById("payAmount");
    const receiveAmountInput = document.getElementById("receiveAmount");
    const walletAddressDisplay = document.getElementById("walletAddress");
    const paymentMethodSelect = document.getElementById("paymentMethod");

    // Update token amount dynamically
    payAmountInput.addEventListener("input", function() {
        const amount = parseFloat(payAmountInput.value) || 0;
        receiveAmountInput.value = (amount * TOKEN_RATE).toFixed(2);
    });

    // Connect Wallet
    connectButton.addEventListener("click", async function() {
        try {
            if (window.ethereum) {
                // MetaMask or Trust Wallet in-app browser
                provider = window.ethereum;
                await provider.request({ method: "eth_requestAccounts" });
                web3 = new Web3(provider);
            } else {
                // WalletConnect fallback
                provider = await EthereumProvider.init({
                    projectId: WALLET_CONNECT_PROJECT_ID,
                    chains: [56], // BSC Mainnet
                    rpcMap: { 56: "https://bsc-dataseed.binance.org/" },
                    showQrModal: true
                        // ✅ Removed methods and events (let WalletConnect auto-negotiate)
                });
                await provider.connect();
                web3 = new Web3(provider);
            }

            const accounts = await web3.eth.getAccounts();
            userAddress = accounts[0];
            walletAddressDisplay.textContent = `Connected: ${shortAddress(userAddress)}`;
            buyButton.disabled = false;

            console.log("Wallet connected:", userAddress);
        } catch (error) {
            console.error("Wallet connection failed:", error);
            alert("Wallet connection failed: " + error.message);
        }
    });

    // Buy Tokens (BNB or USDT)
    buyButton.addEventListener("click", async function() {
        const amount = parseFloat(payAmountInput.value) || 0;
        const method = paymentMethodSelect.value;

        if (!userAddress) {
            alert("Connect your wallet first");
            return;
        }

        if (amount <= 0) {
            alert("Please enter a valid amount");
            return;
        }

        try {
            let tx;

            if (method === "BNB") {
                const valueInWei = web3.utils.toWei(amount.toString(), "ether");

                tx = await web3.eth.sendTransaction({
                    from: userAddress,
                    to: RECEIVING_WALLET,
                    value: valueInWei,
                    gas: 21000 // minimal gas for BNB transfer
                });

            } else if (method === "USDT") {
                const contract = new web3.eth.Contract(USDT_ABI, USDT_ADDRESS);
                const decimals = 18; // USDT on BSC uses 18 decimals
                const value = web3.utils.toBN(amount * 10 ** decimals);

                tx = await contract.methods.transfer(RECEIVING_WALLET, value).send({
                    from: userAddress,
                    gas: 60000 // enough gas for BEP20 transfer
                });
            }

            alert("✅ Transaction successful!\nHash: " + tx.transactionHash);

            // Save transaction to backend
            await fetch("/api/save-transaction", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content")
                },
                body: JSON.stringify({
                    txHash: tx.transactionHash,
                    from: userAddress,
                    amount: amount,
                    tokenReceived: receiveAmountInput.value,
                    method: method
                })
            });

        } catch (error) {
            console.error("Transaction failed:", error);
            alert("❌ Transaction failed: " + error.message);
        }
    });

});

function shortAddress(address) {
    return address.slice(0, 6) + "..." + address.slice(-4);
}