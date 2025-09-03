<style>
    .failed-page {
        background: linear-gradient(135deg, #ff416c, #ff4b2b);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }
    .failed-card {
        background: #fff;
        color: #333;
        border-radius: 20px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        padding: 50px;
        max-width: 450px;
        text-align: center;
        animation: fadeIn 1s ease-in-out;
    }
    .failed-icon {
        font-size: 5rem;
        color: #dc3545;
        margin-bottom: 20px;
        animation: pop 0.6s ease-in-out;
    }
    .btn-gradient-danger {
        background: linear-gradient(135deg, #ff416c, #ff4b2b);
        color: #fff;
        border: none;
        font-size: 1.1rem;
        padding: 12px 30px;
        border-radius: 30px;
        transition: 0.3s;
    }
    .btn-gradient-danger:hover {
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

<div class="failed-page">
    <div class="failed-card">
        <i class="bi bi-x-circle-fill failed-icon"></i>
        <h2 class="fw-bold text-danger">Payment Failed!</h2>
        <p class="mb-4 text-muted">Unfortunately, your payment could not be processed. Please try again or contact support.</p>
        <a href="{{ url('/login') }}" class="btn btn-gradient-danger mt-4">Try Again</a>
    </div>
</div>