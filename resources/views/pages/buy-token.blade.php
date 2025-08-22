<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6 text-center">
            <div class="card shadow-lg border-primary">
                <div class="card-body">
                    <div class="mb-4">
                        <h3 class="text-primary">Buy $YourToken</h3>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Pay with ETH</label>
                        <input type="number" id="payAmount" class="form-control" placeholder="0" step="0.0001">
                    </div>

                    <div class="mb-4">
                        <label class="form-label">Receive $YourToken</label>
                        <input type="number" id="receiveAmount" class="form-control" placeholder="0" readonly>
                    </div>

                    <div class="d-flex justify-content-center gap-3">
                        <button class="btn btn-success" id="connectWallet">Connect Wallet</button>
                        <button class="btn btn-primary" id="buyWithETH" disabled>Buy with ETH</button>
                    </div>

                    <p class="mt-3">
                        <a href="#" id="walletAddress" class="text-muted"></a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="{{ mix('js/wallet.js') }}"></script>