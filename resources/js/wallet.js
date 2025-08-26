import Web3 from 'web3';
import EthereumProvider from "@walletconnect/ethereum-provider";

let web3;
let userAddress = null;
let provider = null;

// Conversion rate: 1 BNB = 1000 Tokens
const TOKEN_RATE = 1000;
// Replace with your receiving wallet
const RECEIVING_WALLET = '0x0a1ad99042f75253faaaA5a448325e7c0069E9fd';

// WalletConnect Project ID (get from https://cloud.walletconnect.com/)
const WALLET_CONNECT_PROJECT_ID = process.env.MIX_WALLETCONNECT_PROJECT_ID;

document.addEventListener('DOMContentLoaded', function() {
    const connectButton = document.getElementById('connectWallet');
    const payAmountInput = document.getElementById('payAmount');
    const receiveAmountInput = document.getElementById('receiveAmount');
    const walletAddressDisplay = document.getElementById('walletAddress');

    // ✅ Update token amount dynamically
    payAmountInput.addEventListener('input', function() {
        const bnbAmount = parseFloat(payAmountInput.value) || 0;
        receiveAmountInput.value = (bnbAmount * TOKEN_RATE).toFixed(2);
    });

    // ✅ Connect Wallet (MetaMask or WalletConnect)
    connectButton.addEventListener('click', async function() {

        // if (typeof window.ethereum !== 'undefined') {
        //     // ✅ MetaMask
        //     provider = window.ethereum;
        //     await provider.request({ method: 'eth_requestAccounts' });
        //     await switchToBSC();
        // } else {
        // ✅ WalletConnect v2
        provider = await EthereumProvider.init({
            projectId: WALLET_CONNECT_PROJECT_ID,
            chains: [56], // BSC Mainnet
            rpcMap: {
                56: "https://bsc-dataseed.binance.org/"
            },
            showQrModal: true,
            methods: ["eth_sendTransaction", "personal_sign", "eth_signTypedData"],
            events: ["chainChanged", "accountsChanged"]
        });

        await provider.connect(); // ✅ v2 correct method
        // }

        web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        userAddress = accounts[0];

        walletAddressDisplay.textContent = `Connected: ${shortAddress(userAddress)}`;
    });

    // ✅ Buy with BNB

});
