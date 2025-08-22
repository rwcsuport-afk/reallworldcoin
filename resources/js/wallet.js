import Web3 from 'web3';

let web3;
let userAddress = null;

// Conversion rate: 1 BNB = 1000 Tokens (Change as per your project)
const TOKEN_RATE = 1000;

// Replace with your receiving wallet or contract address
const RECEIVING_WALLET = '0x7f2b19509ae07a5aa7247f5ecd9cc0f7ff1cece6';

document.addEventListener('DOMContentLoaded', function () {
    const connectButton = document.getElementById('connectWallet');
    const buyButton = document.getElementById('buyWithBNB');
    const payAmountInput = document.getElementById('payAmount');
    const receiveAmountInput = document.getElementById('receiveAmount');
    const walletAddressDisplay = document.getElementById('walletAddress');

    // ✅ Update token amount dynamically based on BNB input
    payAmountInput.addEventListener('input', function () {
        const bnbAmount = parseFloat(payAmountInput.value) || 0;
        receiveAmountInput.value = (bnbAmount * TOKEN_RATE).toFixed(2);
    });

    // ✅ Connect Wallet
    connectButton.addEventListener('click', async function () {
        if (typeof window.ethereum === 'undefined') {
            alert('MetaMask is not installed. Please install it.');
            return;
        }

        try {
            // Request wallet connection
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            if (!accounts || accounts.length === 0) {
                alert('No accounts found. Please unlock your wallet.');
                return;
            }

            // Initialize Web3
            web3 = new Web3(window.ethereum);
            userAddress = accounts[0];

            // ✅ Switch to Binance Smart Chain
            await switchToBSC();

            // Display connected wallet
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
        } catch (error) {
            console.error('Transaction failed:', error);
            alert('❌ Transaction failed: ' + error.message);
        }
    });
});

// ✅ Function to switch to Binance Smart Chain
async function switchToBSC() {
    try {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x38' }], // BSC Mainnet
        });
    } catch (error) {
        // If chain is not added to MetaMask, add it
        if (error.code === 4902) {
            await window.ethereum.request({
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

// ✅ Helper: Shorten wallet address for display
function shortAddress(address) {
    return address.slice(0, 6) + '...' + address.slice(-4);
}
