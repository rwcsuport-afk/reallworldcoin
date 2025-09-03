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

    <h2>Login Activity Report - {{ \Carbon\Carbon::parse($date)->format('d M Y') }}</h2>

    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>User Agent</th>
                <th>OS</th>
                <th>IP</th>
                <th>Login At</th>
                <th>Logout At</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($activities as $index => $activity)
                <tr>
                    <td>{{ $index + 1 }}</td>
                    <td>{{ $activity['User Name'] }}</td>
                    <td>{{ $activity['User Email'] ?? 'N/A' }}</td>
                    <td>{{ $activity['User Agent'] }}</td>
                    <td>{{ $activity['OS'] }}</td>
                    <td>{{ $activity['IP'] }}</td>
                    <td>{{ \Carbon\Carbon::parse($activity['Login At'])->format('d M Y H:i') }}</td>
                    <td>{{ \Carbon\Carbon::parse($activity['Logout At'])->format('d M Y H:i') }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

</body>
</html>
