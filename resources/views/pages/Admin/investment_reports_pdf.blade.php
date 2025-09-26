<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Investment Report</title>
    <style>
        body {
            font-family: sans-serif;
            font-size: 12px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            table-layout: fixed;
            /* ensures equal column width */
        }

        th,
        td {
            border: 1px solid #000;
            padding: 6px;
            text-align: left;
            font-size: 10pt;
            word-wrap: break-word;
            /* allow long text to wrap */
            word-break: break-all;
            /* break long words if needed */
            white-space: normal;
            /* allow text wrapping */
        }

        th {
            background: #f0f0f0;
        }

        h2 {
            text-align: center;
        }

        /* Optional: specific column widths */
        td.hash,
        td.address {
            max-width: 120px;
            /* adjust as needed */
        }
    </style>

</head>

<body>

    <h2>Login Activity Report</h2>

    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Unique Id</th>
                <th>Address From</th>
                <th>Address To</th>
                <th>Amount</th>
                <th>BNB/USDT</th>
                <th>Timestamp</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($investment as $index => $invest)
                <tr>
                    <td>{{ $index + 1 }}</td>
                    <td>{{ $invest->hash }}</td>
                    <td>{{ $invest->from_address }}</td>
                    <td>{{ $invest->to_address }}</td>
                    <td>{{ $invest->amount }}</td>
                    <td>{{ $invest->coin }}</td>
                    <td>{{ $invest->block_timestamp }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

</body>

</html>
