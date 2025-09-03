<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\LoginActivity;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use PDF;

class GenerateLoginReports extends Command
{
    protected $signature = 'report:generate-login';
    protected $description = 'Generate daily login activity report (CSV & PDF)';

    public function handle()
    {
        // Use previous day's data
        $date = now()->subDay()->format('Y-m-d');
        $activities = LoginActivity::whereDate('created_at', $date)->get();

        // Enrich activities with user names
        $csvData = [];
        foreach ($activities as $activity) {
            $user = User::find($activity->login_id);
            $csvData[] = [
                'User Name' => $user ? $user->name : 'Unknown',
                'User Agent' => $activity->user_agent,
                'OS' => $activity->os,
                'IP' => $activity->ip,
                'Login At' => $activity->login_at,
                'Logout At' => $activity->logout_at,
                'Date' => $activity->created_at->format('Y-m-d H:i:s'),
            ];
        }

        // Paths
        $csvPath = "reports/login_activity_{$date}.csv";
        $pdfPath = "reports/login_activity_{$date}.pdf";

        // Ensure directory exists
        Storage::makeDirectory('reports');

        // Write CSV
        $csvFullPath = storage_path("app/{$csvPath}");
        $csv = fopen($csvFullPath, 'w');
        fputcsv($csv, array_keys($csvData[0] ?? ['No data']));
        foreach ($csvData as $row) {
            fputcsv($csv, $row);
        }
        fclose($csv);

        // Write PDF
        $pdf = PDF::loadView('pages.Admin.activity_reports_pdf', ['activities' => $csvData, 'date' => $date]);
        Storage::put($pdfPath, $pdf->output());

        $this->info("Login activity report generated: \n- CSV: $csvPath\n- PDF: $pdfPath");
    }
}

