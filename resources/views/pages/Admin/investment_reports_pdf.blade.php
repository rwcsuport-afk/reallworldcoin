<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Login Activity Report</title>
    <style>
        body { font-family: sans-serif; font-size: 12px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #000; padding: 6px; text-align: left; }
        th { background: #f0f0f0; }
        h2 { text-align: center; }
    </style>
</head>
<body>

    <h2>Login Activity Report</h2>

    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Stake Amount</th>
                <th>Earn Coin</th>
                <th>Start Date</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($investment as $index => $invest)
                <tr>
                    <td>{{ $index + 1 }}</td>
                    <td>{{ $invest->user->name }}</td>
                    <td>$ {{ $invest->amount }}</td>
                    <td>{{ $invest->coin }}</td>
                    <td>{{ $invest->start_date }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

</body>
</html>
