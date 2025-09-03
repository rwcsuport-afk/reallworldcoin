<style>
    .success-page {
        background: linear-gradient(135deg, #00b09b, #96c93d);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }
    .success-card {
        background: #fff;
        color: #333;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        padding: 50px;
        max-width: 450px;
        text-align: center;
        animation: fadeIn 1s ease-in-out;
    }
    .success-icon {
        font-size: 5rem;
        color: #28a745;
        margin-bottom: 20px;
        animation: pop 0.6s ease-in-out;
    }
    .btn-gradient {
        background: linear-gradient(135deg, #00b09b, #96c93d);
        color: #fff;
        border: none;
        font-size: 1.1rem;
        padding: 12px 30px;
        border-radius: 30px;
        transition: 0.3s;
    }
    .btn-gradient:hover {
        opacity: 0.9;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes pop {
        0% { transform: scale(0.5); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
    }
</style>

<div class="success-page">
    <div class="success-card">
        <i class="bi bi-check-circle-fill success-icon"></i>
        <h2 class="fw-bold text-success">Payment Successful!</h2>
        <p class="mb-4 text-muted">Thank you for your payment. Your transaction has been completed successfully.</p>
        <a href="{{ url('/login') }}" class="btn btn-gradient mt-4">Go to Dashboard</a>
    </div>
</div>