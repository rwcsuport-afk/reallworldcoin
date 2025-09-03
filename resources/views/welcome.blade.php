<!DOCTYPE html>
<html>
<head>
    {{-- <link rel="stylesheet" href="{{ mix('css/app.css') }}"> --}}
</head>
<body>
    <div id="app">
        <!-- AppKit Buttons -->
        <appkit-button></appkit-button>
        <appkit-network-button></appkit-network-button>

        <!-- Custom Action -->
        <button onclick="sendTransaction()">Send 0.0001</button>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
