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
                    <td>{{ $activity->user->name }}</td>
                    <td>{{ $activity->user->email }}</td>
                    <td>{{ $activity->user_agent }}</td>
                    <td>{{ $activity->os }}</td>
                    <td>{{ $activity->ip }}</td>
                    <td>{{ \Carbon\Carbon::parse($activity->login_at)->format('d M Y') }}</td>
                    <td>{{ \Carbon\Carbon::parse($activity->logout_at)->format('d M Y') }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

</body>
</html>
