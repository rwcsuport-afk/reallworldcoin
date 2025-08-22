<?php

namespace App\Helpers;

class UserAgentHelper
{
    public static function getOS($userAgent)
    {
        $osArray = [
            'Windows 11' => 'Windows NT 10.0',
            'Windows 10' => 'Windows NT 10.0',
            'Windows 8.1' => 'Windows NT 6.3',
            'Windows 8' => 'Windows NT 6.2',
            'Windows 7' => 'Windows NT 6.1',
            'Mac OS X' => 'Macintosh',
            'Linux' => 'Linux',
            'Ubuntu' => 'Ubuntu',
            'Android' => 'Android',
            'iOS' => 'iPhone|iPad',
        ];

        foreach ($osArray as $os => $pattern) {
            if (preg_match("/$pattern/i", $userAgent)) {
                return $os;
            }
        }

        return 'Unknown OS';
    }
}
