let web3;
let userAddress = null;
let provider = null;

// Receiving wallet (BNB project wallet)
const RECEIVING_WALLET = "0x0a1ad99042f75253faaaA5a448325e7c0069E9fd";

// Conversion rate (example: 1 BNB = 1000 tokens)
const TOKEN_RATE = 1000;

// ✅ Switch to BSC if not already connected
async function switchToBSC() {
    try {
        await provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x38" }], // BSC mainnet
        });
    } catch (err) {
        if (err.code === 4902) {
            await provider.request({
                method: "wallet_addEthereumChain",
                params: [{
                    chainId: "0x38",
                    chainName: "Binance Smart Chain",
                    rpcUrls: ["https://bsc-dataseed.binance.org/"],
                    nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
                    blockExplorerUrls: ["https://bscscan.com"],
                }],
            });
        }
    }
}

// ✅ Connect Wallet
async function connectWallet(type = "metamask") {
    try {
        if (type === "metamask" && window.ethereum) {
            provider = window.ethereum;
            await provider.request({ method: "eth_requestAccounts" });
            await switchToBSC();
            web3 = new Web3(provider);

        } else if (type === "walletconnect") {
            const EthereumProvider = window.WalletConnectEthereumProvider.default;

            provider = await EthereumProvider.init({
                projectId: "d657fc2caf26f35212226268cf9745d0", // 🔹 from cloud.walletconnect.com
                chains: [56], // BSC mainnet
                rpc: { 56: "https://bsc-dataseed.binance.org/" },
                showQrModal: true,
            });

            await provider.enable();
            web3 = new Web3(provider);

        } else {
            alert("No wallet provider found.");
            return;
        }

        const accounts = await web3.eth.getAccounts();
        userAddress = accounts[0];
        return userAddress;

    } catch (err) {
        console.error("Wallet connection error:", err);
        alert("Wallet connection failed. Check console for details.");
    }
}

// ✅ Buy Tokens
async function buyTokens(amountInBNB) {
    try {
        if (!userAddress) {
            alert("Connect wallet first!");
            return;
        }

        const valueInWei = web3.utils.toWei(amountInBNB.toString(), "ether");

        const tx = await web3.eth.sendTransaction({
            from: userAddress,
            to: RECEIVING_WALLET,
            value: valueInWei,
        });

        const tokensReceived = amountInBNB * TOKEN_RATE;
        return { tx, tokensReceived };

    } catch (err) {
        console.error("Transaction error:", err);
        alert("Transaction failed. Check console for details.");
    }
}

// ✅ Attach events
window.onload = function() {
    document.getElementById("connectMetaMask").onclick = async() => {
        let addr = await connectWallet("metamask");
        if (addr) document.getElementById("walletAddress").innerText = "✅ Connected: " + addr;
    };

    document.getElementById("connectWC").onclick = async() => {
        let addr = await connectWallet("walletconnect");
        if (addr) document.getElementById("walletAddress").innerText = "✅ Connected: " + addr;
    };

    document.getElementById("buyTokens").onclick = async() => {
        let bnb = document.getElementById("bnbAmount").value;
        if (!bnb || bnb <= 0) {
            alert("Enter BNB amount");
            return;
        }
        let result = await buyTokens(bnb);
        if (result) {
            document.getElementById("result").innerText =
                `✅ Success! Tx Hash: ${result.tx.transactionHash}\nYou receive ${result.tokensReceived} tokens`;
        }
    };
};