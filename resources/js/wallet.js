let web3;
let userAddress = null;
let provider = null;

// Receiving wallet (your BNB project wallet)
const RECEIVING_WALLET = "0x0a1ad99042f75253faaaA5a448325e7c0069E9fd";

// Conversion rate (example: 1 BNB = 1000 tokens)
const TOKEN_RATE = 1000;

// Connect Wallet (MetaMask or WalletConnect)
async function connectWallet(type = "metamask") {
    if (type === "metamask" && window.ethereum) {
        provider = window.ethereum;
        await provider.request({ method: "eth_requestAccounts" });
        web3 = new Web3(provider);

    } else if (type === "walletconnect") {
        provider = new WalletConnectProvider.default({
            rpc: {
                56: "https://bsc-dataseed.binance.org/", // BSC Mainnet
                97: "https://data-seed-prebsc-1-s1.binance.org:8545/" // BSC Testnet
            },
            chainId: 56, // Mainnet (use 97 for Testnet)
        });

        await provider.enable();
        web3 = new Web3(provider);
    } else {
        alert("No wallet provider found");
        return;
    }

    const accounts = await web3.eth.getAccounts();
    userAddress = accounts[0];
    return userAddress;
}

// Buy Tokens
async function buyTokens(amountInBNB) {
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
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("connectMetaMask").onclick = async() => {
        let addr = await connectWallet("metamask");
        document.getElementById("walletAddress").innerText = "Connected: " + addr;
    };

    document.getElementById("connectWC").onclick = async() => {
        let addr = await connectWallet("walletconnect");
        document.getElementById("walletAddress").innerText = "Connected: " + addr;
    };

    document.getElementById("buyTokens").onclick = async() => {
        let bnb = document.getElementById("bnbAmount").value;
        if (!bnb || bnb <= 0) {
            alert("Enter BNB amount");
            return;
        }
        let result = await buyTokens(bnb);
        document.getElementById("result").innerText =
            `✅ Success! Tx Hash: ${result.tx.transactionHash} | You receive ${result.tokensReceived} tokens`;
    };
});