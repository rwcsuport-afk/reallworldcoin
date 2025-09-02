@extends('app')

<div id="successMessage" class="mt-3"></div>
<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6 text-center">
            <div class="card shadow-lg border-primary">
                <div class="card-body">
                    <div class="mb-4">
                        <h3 class="text-primary fst-italic">Buy RWC $Token Now</h3>
                    </div>

                    <!-- Select Payment Method -->
                    <div class="mb-3">
                        <label class="form-label">Pay With</label>
                        <select id="paymentMethod" class="form-select">
                            <option value="BNB" selected>BNB</option>
                            <option value="USDT">USDT (BEP20)</option>
                        </select>
                    </div>

                    <!-- Enter Amount -->
                    <div class="mb-3">
                        <label class="form-label" id="payLabel">Pay with BNB</label>
                        <input type="number" id="payAmount" class="form-control" placeholder="0" step="0.0001">
                    </div>

                    <!-- Token Received -->
                    <div class="mb-4">
                        <label class="form-label">Receive $YourToken</label>
                        <input type="number" id="receiveAmount" class="form-control" placeholder="0" readonly>
                    </div>

                    <!-- Buttons -->
                    <div class="d-flex justify-content-center gap-3">
                        <button type="button" class="btn btn-success" id="connectWallet">Connect Wallet</button>
                        <button type="button" class="btn btn-primary" id="buyWithBNB" disabled>Buy</button>
                    </div>

                    <!-- Wallet Address -->
                    <p class="mt-3">
                        <a href="#" id="walletAddress" class="text-muted"></a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

{{-- ✅ Load JS safely at bottom --}}
<script src="{{ mix('js/wallet.js') }}" defer></script>
