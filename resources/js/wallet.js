import Web3 from 'web3';
import EthereumProvider from "@walletconnect/ethereum-provider";

let web3;
let userAddress = null;
let provider = null;

// Conversion rate: 1 BNB = 1000 Tokens
const TOKEN_RATE = 1000;
// Replace with your receiving wallet
const RECEIVING_WALLET = '0x7f2b19509ae07a5aa7247f5ecd9cc0f7ff1cece6';

// WalletConnect Project ID (get from https://cloud.walletconnect.com/)
const WALLET_CONNECT_PROJECT_ID = "d657fc2caf26f35212226268cf9745d0";

document.addEventListener('DOMContentLoaded', function () {
    const connectButton = document.getElementById('connectWallet');
    const buyButton = document.getElementById('buyWithBNB');
    const payAmountInput = document.getElementById('payAmount');
    const receiveAmountInput = document.getElementById('receiveAmount');
    const walletAddressDisplay = document.getElementById('walletAddress');

    // ✅ Update token amount dynamically
    payAmountInput.addEventListener('input', function () {
        const bnbAmount = parseFloat(payAmountInput.value) || 0;
        receiveAmountInput.value = (bnbAmount * TOKEN_RATE).toFixed(2);
    });

    // ✅ Connect Wallet (MetaMask or WalletConnect)
    connectButton.addEventListener('click', async function () {
        try {
            if (typeof window.ethereum !== 'undefined') {
                // ✅ MetaMask
                provider = window.ethereum;
                await provider.request({ method: 'eth_requestAccounts' });
                await switchToBSC();
            } else {
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
            }

            web3 = new Web3(provider);
            const accounts = await web3.eth.getAccounts();
            userAddress = accounts[0];

            walletAddressDisplay.textContent = `Connected: ${shortAddress(userAddress)}`;
            buyButton.disabled = false;

            console.log('Wallet connected:', userAddress);
        } catch (error) {
            console.error('Wallet connection failed:', error);
            alert('Wallet connection failed: ' + error.message);
        }
    });

    // ✅ Buy with BNB
    buyButton.addEventListener('click', async function () {
        const bnbAmount = parseFloat(payAmountInput.value) || 0;
        if (!bnbAmount || !userAddress) {
            alert('Enter amount and connect wallet first.');
            return;
        }

        const valueInWei = web3.utils.toWei(bnbAmount.toString(), 'ether');

        try {
            const tx = await web3.eth.sendTransaction({
                from: userAddress,
                to: RECEIVING_WALLET,
                value: valueInWei
            });

            alert('✅ Transaction successful!\nHash: ' + tx.transactionHash);
            console.log('Transaction:', tx);

            // ✅ Send transaction details to Laravel backend
            await fetch('/api/save-transaction', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify({
                    txHash: tx.transactionHash,
                    from: userAddress,
                    amount: bnbAmount,
                    tokenReceived: receiveAmountInput.value
                })
            });

            console.log('Transaction saved to backend.');

        } catch (error) {
            console.error('Transaction failed:', error);
            alert('❌ Transaction failed: ' + error.message);
        }
    });
});

// ✅ Switch to Binance Smart Chain (MetaMask only)
async function switchToBSC() {
    try {
        await provider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x38' }], // BSC Mainnet
        });
    } catch (error) {
        if (error.code === 4902) {
            await provider.request({
                method: 'wallet_addEthereumChain',
                params: [{
                    chainId: '0x38',
                    chainName: 'Binance Smart Chain',
                    nativeCurrency: {
                        name: 'BNB',
                        symbol: 'BNB',
                        decimals: 18
                    },
                    rpcUrls: ['https://bsc-dataseed.binance.org/'],
                    blockExplorerUrls: ['https://bscscan.com']
                }]
            });
        } else {
            throw error;
        }
    }
}

function shortAddress(address) {
    return address.slice(0, 6) + '...' + address.slice(-4);
}
