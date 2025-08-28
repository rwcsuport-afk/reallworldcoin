-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 22, 2025 at 12:46 PM
-- Server version: 8.0.42-0ubuntu0.20.04.1
-- PHP Version: 7.4.3-4ubuntu2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crypto`
--

-- --------------------------------------------------------

--
-- Table structure for table `coins`
--

CREATE TABLE `coins` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `symbol` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roi_percentage` decimal(5,2) NOT NULL DEFAULT '1.00',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `login_activities`
--

CREATE TABLE `login_activities` (
  `id` bigint UNSIGNED NOT NULL,
  `login_id` int UNSIGNED NOT NULL,
  `user_agent` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `os` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ip` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `login_at` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logout_at` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `login_activities`
--

INSERT INTO `login_activities` (`id`, `login_id`, `user_agent`, `os`, `ip`, `login_at`, `logout_at`, `created_at`, `updated_at`) VALUES
(1, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', NULL, '127.0.0.1', '2025-07-28 05:43:42', '2025-07-28 05:43:49', '2025-07-28 00:13:42', '2025-07-28 00:13:49'),
(2, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', NULL, '127.0.0.1', '2025-07-28 05:44:10', '2025-07-28 06:24:59', '2025-07-28 00:14:10', '2025-07-28 00:54:59'),
(3, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', NULL, '127.0.0.1', '2025-07-28 06:03:58', NULL, '2025-07-28 00:33:58', '2025-07-28 00:33:58'),
(4, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', NULL, '127.0.0.1', '2025-07-28 06:25:11', '2025-07-28 10:49:47', '2025-07-28 00:55:11', '2025-07-28 05:19:47'),
(5, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', NULL, '127.0.0.1', '2025-07-28 08:02:04', NULL, '2025-07-28 02:32:04', '2025-07-28 02:32:04'),
(6, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-28 10:50:15', NULL, '2025-07-28 05:20:15', '2025-07-28 05:20:15'),
(7, 9, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 03:54:13', '2025-07-29 05:50:08', '2025-07-28 22:24:13', '2025-07-29 00:20:08'),
(8, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 03:58:15', NULL, '2025-07-28 22:28:15', '2025-07-28 22:28:15'),
(9, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 05:50:19', '2025-07-29 05:59:29', '2025-07-29 00:20:19', '2025-07-29 00:29:29'),
(10, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 05:52:29', NULL, '2025-07-29 00:22:29', '2025-07-29 00:22:29'),
(11, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 06:02:51', '2025-07-29 06:25:20', '2025-07-29 00:32:51', '2025-07-29 00:55:20'),
(12, 10, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 06:25:53', '2025-07-29 06:38:21', '2025-07-29 00:55:53', '2025-07-29 01:08:21'),
(13, 8, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 06:39:02', '2025-07-29 08:44:23', '2025-07-29 01:09:02', '2025-07-29 03:14:23'),
(14, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 07:18:07', NULL, '2025-07-29 01:48:07', '2025-07-29 01:48:07'),
(15, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 08:44:36', '2025-07-29 09:53:09', '2025-07-29 03:14:36', '2025-07-29 04:23:09'),
(16, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 09:32:11', NULL, '2025-07-29 04:02:11', '2025-07-29 04:02:11'),
(17, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 09:53:22', '2025-07-29 10:04:19', '2025-07-29 04:23:22', '2025-07-29 04:34:19'),
(18, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 09:55:01', NULL, '2025-07-29 04:25:01', '2025-07-29 04:25:01'),
(19, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 10:04:35', '2025-07-29 10:16:06', '2025-07-29 04:34:35', '2025-07-29 04:46:06'),
(20, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 10:15:22', NULL, '2025-07-29 04:45:22', '2025-07-29 04:45:22'),
(21, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 10:16:01', NULL, '2025-07-29 04:46:01', '2025-07-29 04:46:01'),
(22, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 10:16:31', '2025-07-29 10:40:18', '2025-07-29 04:46:31', '2025-07-29 05:10:18'),
(23, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 10:25:16', NULL, '2025-07-29 04:55:16', '2025-07-29 04:55:16'),
(24, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 10:40:33', '2025-07-29 10:48:00', '2025-07-29 05:10:33', '2025-07-29 05:18:00'),
(25, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 10:45:56', NULL, '2025-07-29 05:15:56', '2025-07-29 05:15:56'),
(26, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 10:48:13', '2025-07-29 11:07:48', '2025-07-29 05:18:13', '2025-07-29 05:37:48'),
(27, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 10:49:10', NULL, '2025-07-29 05:19:10', '2025-07-29 05:19:10'),
(28, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 11:08:01', '2025-07-29 11:27:14', '2025-07-29 05:38:01', '2025-07-29 05:57:14'),
(29, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 11:20:44', NULL, '2025-07-29 05:50:44', '2025-07-29 05:50:44'),
(30, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-29 11:27:29', NULL, '2025-07-29 05:57:29', '2025-07-29 05:57:29'),
(31, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-30 03:40:29', '2025-07-30 05:09:43', '2025-07-29 22:10:29', '2025-07-29 23:39:43'),
(32, 8, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-30 05:09:58', '2025-07-30 06:02:49', '2025-07-29 23:39:58', '2025-07-30 00:32:49'),
(33, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-30 05:29:42', NULL, '2025-07-29 23:59:42', '2025-07-29 23:59:42'),
(34, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-30 06:03:19', NULL, '2025-07-30 00:33:19', '2025-07-30 00:33:19'),
(35, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-30 08:25:41', NULL, '2025-07-30 02:55:41', '2025-07-30 02:55:41'),
(36, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-31 03:57:12', '2025-07-31 04:02:40', '2025-07-30 22:27:12', '2025-07-30 22:32:40'),
(37, 8, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-31 04:02:59', '2025-07-31 04:47:32', '2025-07-30 22:32:59', '2025-07-30 23:17:32'),
(38, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-31 04:04:44', NULL, '2025-07-30 22:34:44', '2025-07-30 22:34:44'),
(39, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-31 04:47:43', '2025-07-31 05:22:56', '2025-07-30 23:17:43', '2025-07-30 23:52:56'),
(40, 4, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-31 05:23:10', '2025-07-31 05:23:35', '2025-07-30 23:53:10', '2025-07-30 23:53:35'),
(41, 9, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-31 05:23:47', '2025-07-31 05:24:50', '2025-07-30 23:53:47', '2025-07-30 23:54:50'),
(42, 5, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-31 05:25:02', '2025-07-31 05:25:09', '2025-07-30 23:55:02', '2025-07-30 23:55:09'),
(43, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-31 05:25:29', '2025-07-31 07:12:58', '2025-07-30 23:55:29', '2025-07-31 01:42:58'),
(44, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-31 06:17:59', NULL, '2025-07-31 00:47:59', '2025-07-31 00:47:59'),
(45, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-31 07:13:32', '2025-07-31 08:10:22', '2025-07-31 01:43:32', '2025-07-31 02:40:22'),
(46, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-31 07:20:45', NULL, '2025-07-31 01:50:45', '2025-07-31 01:50:45'),
(47, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-31 08:10:33', '2025-07-31 08:10:43', '2025-07-31 02:40:33', '2025-07-31 02:40:43'),
(48, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-31 08:10:58', NULL, '2025-07-31 02:40:58', '2025-07-31 02:40:58'),
(49, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-31 08:13:54', '2025-07-31 08:14:58', '2025-07-31 02:43:54', '2025-07-31 02:44:58'),
(50, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-31 08:14:39', NULL, '2025-07-31 02:44:39', '2025-07-31 02:44:39'),
(51, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-07-31 08:15:22', NULL, '2025-07-31 02:45:22', '2025-07-31 02:45:22'),
(52, 2, 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:136.0) Gecko/20100101 Firefox/136.0', 'Linux', '127.0.0.1', '2025-07-31 08:16:09', '2025-07-31 08:16:22', '2025-07-31 02:46:09', '2025-07-31 02:46:22'),
(53, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-01 03:47:20', NULL, '2025-07-31 22:17:20', '2025-07-31 22:17:20'),
(54, 1, 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:136.0) Gecko/20100101 Firefox/136.0', 'Linux', '127.0.0.1', '2025-08-01 03:48:34', NULL, '2025-07-31 22:18:34', '2025-07-31 22:18:34'),
(55, 1, 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:136.0) Gecko/20100101 Firefox/136.0', 'Linux', '127.0.0.1', '2025-08-01 03:58:55', NULL, '2025-07-31 22:28:55', '2025-07-31 22:28:55'),
(56, 1, 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:136.0) Gecko/20100101 Firefox/136.0', 'Linux', '127.0.0.1', '2025-08-01 03:59:31', NULL, '2025-07-31 22:29:31', '2025-07-31 22:29:31'),
(57, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-01 08:01:37', NULL, '2025-08-01 02:31:37', '2025-08-01 02:31:37'),
(58, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-06 04:55:03', NULL, '2025-08-05 23:25:03', '2025-08-05 23:25:03'),
(59, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-06 05:54:13', NULL, '2025-08-06 00:24:13', '2025-08-06 00:24:13'),
(60, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-06 06:41:37', NULL, '2025-08-06 01:11:37', '2025-08-06 01:11:37'),
(61, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-07 11:53:40', NULL, '2025-08-07 06:23:40', '2025-08-07 06:23:40'),
(62, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-08 03:47:19', NULL, '2025-08-07 22:17:19', '2025-08-07 22:17:19'),
(63, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-12 03:43:32', '2025-08-12 08:21:23', '2025-08-11 22:13:32', '2025-08-12 02:51:23'),
(64, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-12 08:20:45', NULL, '2025-08-12 02:50:45', '2025-08-12 02:50:45'),
(65, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-12 08:32:32', NULL, '2025-08-12 03:02:32', '2025-08-12 03:02:32'),
(66, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-12 11:11:56', NULL, '2025-08-12 05:41:56', '2025-08-12 05:41:56'),
(67, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-14 04:15:20', NULL, '2025-08-13 22:45:20', '2025-08-13 22:45:20'),
(68, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-14 06:55:10', NULL, '2025-08-14 01:25:10', '2025-08-14 01:25:10'),
(69, 2, 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:136.0) Gecko/20100101 Firefox/136.0', 'Linux', '127.0.0.1', '2025-08-14 07:34:44', '2025-08-14 07:56:20', '2025-08-14 02:04:44', '2025-08-14 02:26:20'),
(70, 3, 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:136.0) Gecko/20100101 Firefox/136.0', 'Linux', '127.0.0.1', '2025-08-14 07:56:40', '2025-08-14 07:56:50', '2025-08-14 02:26:40', '2025-08-14 02:26:50'),
(71, 2, 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:136.0) Gecko/20100101 Firefox/136.0', 'Linux', '127.0.0.1', '2025-08-14 07:57:15', NULL, '2025-08-14 02:27:15', '2025-08-14 02:27:15'),
(72, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-14 10:47:58', NULL, '2025-08-14 05:17:58', '2025-08-14 05:17:58'),
(73, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-20 03:36:21', NULL, '2025-08-19 22:06:21', '2025-08-19 22:06:21'),
(74, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-20 05:50:55', '2025-08-20 07:55:00', '2025-08-20 00:20:55', '2025-08-20 02:25:00'),
(75, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-20 07:54:54', NULL, '2025-08-20 02:24:54', '2025-08-20 02:24:54'),
(76, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-20 07:58:17', '2025-08-20 10:37:44', '2025-08-20 02:28:17', '2025-08-20 05:07:44'),
(77, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-20 10:34:51', NULL, '2025-08-20 05:04:51', '2025-08-20 05:04:51'),
(78, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-20 10:37:38', NULL, '2025-08-20 05:07:38', '2025-08-20 05:07:38'),
(79, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-20 10:37:57', '2025-08-20 11:39:43', '2025-08-20 05:07:57', '2025-08-20 06:09:43'),
(80, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-20 11:39:38', NULL, '2025-08-20 06:09:38', '2025-08-20 06:09:38'),
(81, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-20 11:39:54', NULL, '2025-08-20 06:09:54', '2025-08-20 06:09:54'),
(82, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-20 11:49:17', NULL, '2025-08-20 06:19:17', '2025-08-20 06:19:17'),
(83, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 03:56:44', '2025-08-21 06:50:31', '2025-08-20 22:26:44', '2025-08-21 01:20:31'),
(84, 1, 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:136.0) Gecko/20100101 Firefox/136.0', 'Linux', '127.0.0.1', '2025-08-21 04:25:13', NULL, '2025-08-20 22:55:13', '2025-08-20 22:55:13'),
(85, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 06:50:44', '2025-08-21 08:15:32', '2025-08-21 01:20:44', '2025-08-21 02:45:32'),
(86, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 07:42:38', NULL, '2025-08-21 02:12:38', '2025-08-21 02:12:38'),
(87, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 08:15:57', '2025-08-21 08:42:26', '2025-08-21 02:45:57', '2025-08-21 03:12:26'),
(88, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 08:41:25', NULL, '2025-08-21 03:11:25', '2025-08-21 03:11:25'),
(89, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 08:42:38', '2025-08-21 08:58:19', '2025-08-21 03:12:38', '2025-08-21 03:28:19'),
(90, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 08:47:50', NULL, '2025-08-21 03:17:50', '2025-08-21 03:17:50'),
(91, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 08:58:31', '2025-08-21 09:30:38', '2025-08-21 03:28:31', '2025-08-21 04:00:38'),
(92, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 09:12:00', NULL, '2025-08-21 03:42:00', '2025-08-21 03:42:00'),
(93, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 09:30:51', '2025-08-21 10:18:50', '2025-08-21 04:00:51', '2025-08-21 04:48:50'),
(94, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 10:19:02', NULL, '2025-08-21 04:49:02', '2025-08-21 04:49:02'),
(95, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 10:20:26', '2025-08-21 10:34:27', '2025-08-21 04:50:26', '2025-08-21 05:04:27'),
(96, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 10:20:40', NULL, '2025-08-21 04:50:40', '2025-08-21 04:50:40'),
(97, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 10:34:42', '2025-08-21 10:36:26', '2025-08-21 05:04:42', '2025-08-21 05:06:26'),
(98, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 11:03:47', NULL, '2025-08-21 05:33:47', '2025-08-21 05:33:47'),
(99, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 11:04:08', NULL, '2025-08-21 05:34:08', '2025-08-21 05:34:08'),
(100, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 11:04:33', '2025-08-21 11:35:21', '2025-08-21 05:34:33', '2025-08-21 06:05:21'),
(101, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 11:15:59', NULL, '2025-08-21 05:45:59', '2025-08-21 05:45:59'),
(102, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 11:35:36', NULL, '2025-08-21 06:05:36', '2025-08-21 06:05:36');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2025_07_24_085343_add_paid_to_users_table', 2),
(6, '2025_07_25_055501_add_unique_id_to_users_table', 3),
(7, '2025_07_28_052746_create_stakes_table', 4),
(8, '2025_07_28_053543_create_login_activities_table', 5),
(9, '2025_07_28_060529_create_settings_table', 6),
(10, '2025_07_28_070543_add_wallet_balance_to_users_table', 7),
(11, '2025_07_28_072201_create_roi_logs_table', 8),
(12, '2025_07_28_092222_create_referral_settings_table', 9),
(13, '2025_07_28_102914_add_os_to_login_activities_table', 10),
(14, '2025_07_29_060910_create_referral_bonuses_table', 11),
(15, '2025_07_29_094710_create_coins_table', 12),
(16, '2025_07_29_103408_add_coin_value_usd_to_settings_table', 12),
(17, '2025_07_30_034652_add_coin_to_stakes_table', 13),
(18, '2025_07_30_054852_create_setting_logs_table', 14),
(19, '2025_07_31_072450_add_custom_growth_percent_to_users_table', 15),
(20, '2025_08_04_055322_create_notifications_table', 16),
(21, '2025_08_06_063136_add_presale_end_date_to_settings_table', 17),
(22, '2025_08_06_062228_create_stake_timigs_table', 18),
(23, '2025_08_12_033602_create_payments_table', 18),
(24, '2025_08_21_085158_create_withdrawans_table', 19),
(25, '2025_08_21_094429_create_wallet_address_table', 20),
(26, '2025_08_21_100943_create_wallet_addresses_table', 21);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'new notification', NULL, NULL),
(2, 'new notification', '2025-08-05 23:37:55', '2025-08-05 23:37:55'),
(3, 'all notification', NULL, NULL),
(4, 'old notification', '2025-08-11 07:50:27', '2025-08-11 07:50:36');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('banajyotidas@gmail.com', 'C906F6pGJ8EYo0ahuRnqxO1WCR7JwJ88Jqh0Jxe5635TdUcddm3Xr7zaI7k0VQQS', '2025-07-25 05:53:56');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` int DEFAULT NULL,
  `invoice_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `external_invoice_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `coin` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'BTC',
  `amount` decimal(16,8) DEFAULT NULL,
  `currency` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `paid_amount` decimal(16,8) DEFAULT NULL,
  `txid` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invoice_url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `user_id`, `invoice_id`, `external_invoice_id`, `coin`, `amount`, `currency`, `status`, `paid_amount`, `txid`, `invoice_url`, `created_at`, `updated_at`) VALUES
(1, NULL, 'INV_689b109a442b5', 'UgINVzq', 'BNB', '900.00000000', 'USD', 'Pending', NULL, NULL, 'https://invoice.coinremitter.com/view/689b109a310e0d7c022bc4b6', '2025-08-12 04:29:54', '2025-08-12 04:29:54'),
(2, NULL, 'unknown_689b143d67542', NULL, 'BTC', NULL, NULL, 'pending', NULL, NULL, NULL, '2025-08-12 04:45:25', '2025-08-12 04:45:25'),
(3, NULL, 'INV_689b143c704c2', 'a69teai', 'BNB', '900.00000000', 'USD', 'Pending', NULL, NULL, 'https://invoice.coinremitter.com/view/689b143db4f91af723475059', '2025-08-12 04:45:25', '2025-08-12 04:45:25'),
(4, 2, 'INV_689d664120478', 'WbWBBxL', 'BNB', '13.00000000', 'USD', 'Pending', NULL, NULL, 'https://invoice.coinremitter.com/view/689d6642310e0d7c022ce4b4', '2025-08-13 22:59:54', '2025-08-13 22:59:54'),
(5, 2, 'INV_689d6f759a844', 'xh4PI2I', 'TCN', '1.00000000', 'USD', 'Pending', NULL, NULL, 'https://invoice.coinremitter.com/view/689d6f76310e0d7c022ce7bb', '2025-08-13 23:39:10', '2025-08-13 23:39:10'),
(6, 2, 'INV_689d7b8b32b12', 'n6HdahX', 'TCN', '2.00000000', 'USD', 'paid', '2.00000000', NULL, 'https://invoice.coinremitter.com/view/689d7b8c310e0d7c022ceb79', '2025-08-14 00:30:44', '2025-08-14 00:32:34'),
(7, 2, 'INV_689d7d886ff51', 'Yz5EJHv', 'TCN', '1.00000000', 'USD', 'paid', '1.00000000', NULL, 'https://invoice.coinremitter.com/view/689d7d89b4f91af72348763e', '2025-08-14 00:39:13', '2025-08-14 00:40:14'),
(8, 2, 'INV_689d7e57095d3', '3RZGKNn', 'TCN', '1.00000000', 'USD', 'paid', '1.00000000', NULL, 'https://invoice.coinremitter.com/view/689d7e58b4f91af723487691', '2025-08-14 00:42:40', '2025-08-14 00:45:34'),
(9, 2, 'INV_689d803cba817', 'wW8uV7c', 'TCN', '2.00000000', 'USD', 'under paid', '1.00000000', NULL, 'https://invoice.coinremitter.com/view/689d803db4f91af72348772c', '2025-08-14 00:50:45', '2025-08-14 01:01:14'),
(10, 2, 'INV_689d833774c1d', 'x75pzWk', 'TCN', '1.00000000', 'USD', 'paid', '1.00000000', NULL, 'https://invoice.coinremitter.com/view/689d8338b4f91af723487801', '2025-08-14 01:03:28', '2025-08-14 01:15:04'),
(11, 2, 'INV_689da8a58d953', 'eDtcYyb', 'TCN', '1.00000000', 'USD', 'Pending', NULL, NULL, 'https://invoice.coinremitter.com/view/689da8a6310e0d7c022cfbc9', '2025-08-14 03:43:10', '2025-08-14 03:43:10'),
(12, 2, 'INV_689da931eeb1e', 'qY240ob', 'TCN', '1.00000000', 'USD', 'Pending', NULL, NULL, 'https://invoice.coinremitter.com/view/689da932310e0d7c022cfbe6', '2025-08-14 03:45:31', '2025-08-14 03:45:31'),
(13, 2, 'INV_689daba93e494', 'fsL1cWr', 'TCN', '1.00000000', 'USD', 'Pending', NULL, NULL, 'https://invoice.coinremitter.com/view/689dabaa310e0d7c022cfcfd', '2025-08-14 03:56:02', '2025-08-14 03:56:02'),
(14, 2, 'INV_689dad850f439', 'yHM2uy7', 'TCN', '1.00000000', 'USD', 'Pending', NULL, NULL, 'https://invoice.coinremitter.com/view/689dad85b4f91af72348870b', '2025-08-14 04:03:58', '2025-08-14 04:03:58'),
(15, 2, 'INV_689daec4de736', 'IssbAX9', 'TCN', '1.00000000', 'USD', 'paid', '1.00000000', NULL, 'https://invoice.coinremitter.com/view/689daec5310e0d7c022cfdf0', '2025-08-14 04:09:17', '2025-08-14 04:11:16'),
(16, 2, 'INV_689db05cbbd2a', 'AAoQGtb', 'TCN', '1.00000000', 'USD', 'paid', '1.00000000', NULL, 'https://invoice.coinremitter.com/view/689db05d310e0d7c022cfea3', '2025-08-14 04:16:05', '2025-08-14 04:16:46'),
(17, 2, 'INV_689db108d18db', 'qUuckBq', 'TCN', '1.00000000', 'USD', 'paid', '1.00000000', NULL, 'https://invoice.coinremitter.com/view/689db109b4f91af72348884a', '2025-08-14 04:18:57', '2025-08-14 04:19:36'),
(18, 2, 'INV_689db3440d9d3', 'JEwo2Rb', 'TCN', '1.00000000', 'USD', 'paid', '1.00000000', NULL, 'https://invoice.coinremitter.com/view/689db345b4f91af723488943', '2025-08-14 04:28:29', '2025-08-14 04:30:16'),
(19, 2, 'INV_689db5339a45d', 'dsdQkyO', 'TCN', '2.00000000', 'USD', 'paid', '2.00000000', NULL, 'https://invoice.coinremitter.com/view/689db534b4f91af723488a36', '2025-08-14 04:36:44', '2025-08-14 04:37:57'),
(20, 2, 'INV_689db637a8946', 'uuIYVv5', 'TCN', '1.00000000', 'USD', 'paid', '1.00000000', NULL, 'https://invoice.coinremitter.com/view/689db638310e0d7c022d010e', '2025-08-14 04:41:04', '2025-08-14 04:42:27');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `referral_bonuses`
--

CREATE TABLE `referral_bonuses` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `referred_user_id` bigint UNSIGNED NOT NULL,
  `bonus_amount` decimal(12,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `referral_bonuses`
--

INSERT INTO `referral_bonuses` (`id`, `user_id`, `referred_user_id`, `bonus_amount`, `created_at`, `updated_at`) VALUES
(1, 2, 10, '4.00', '2025-07-29 01:07:43', '2025-07-29 01:07:43'),
(4, 2, 8, '0.40', '2025-07-29 23:44:07', '2025-07-29 23:44:07');

-- --------------------------------------------------------

--
-- Table structure for table `referral_settings`
--

CREATE TABLE `referral_settings` (
  `id` bigint UNSIGNED NOT NULL,
  `bonus_percent` double(8,2) NOT NULL DEFAULT '5.00',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `referral_settings`
--

INSERT INTO `referral_settings` (`id`, `bonus_percent`, `created_at`, `updated_at`) VALUES
(1, 4.00, '2025-07-28 03:56:49', '2025-07-28 04:07:56');

-- --------------------------------------------------------

--
-- Table structure for table `roi_logs`
--

CREATE TABLE `roi_logs` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `amount` decimal(15,2) NOT NULL,
  `credited_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roi_logs`
--

INSERT INTO `roi_logs` (`id`, `user_id`, `amount`, `credited_date`, `created_at`, `updated_at`) VALUES
(1, 2, '1.94', '2025-07-28', '2025-07-28 02:08:13', '2025-07-28 02:08:13'),
(2, 2, '1.94', '2025-07-29', '2025-07-28 22:20:25', '2025-07-28 22:20:25'),
(3, 9, '0.54', '2025-07-29', '2025-07-28 22:24:42', '2025-07-28 22:24:42'),
(4, 10, '2.00', '2025-07-29', '2025-07-29 01:24:44', '2025-07-29 01:24:44'),
(5, 8, '1.00', '2025-07-29', '2025-07-29 01:24:44', '2025-07-29 01:24:44'),
(7, 2, '0.16', '2025-07-30', '2025-07-29 23:29:09', '2025-07-29 23:29:09'),
(8, 8, '0.36', '2025-07-30', '2025-07-29 23:44:52', '2025-07-29 23:44:52'),
(9, 2, '0.18', '2025-07-31', '2025-07-30 22:31:30', '2025-07-30 22:31:30'),
(10, 8, '0.18', '2025-07-31', '2025-07-30 22:31:30', '2025-07-30 22:31:30'),
(11, 2, '2.08', '2025-08-14', '2025-08-14 04:47:01', '2025-08-14 04:47:01'),
(12, 2, '2.08', '2025-08-21', '2025-08-21 06:10:57', '2025-08-21 06:10:57');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` bigint UNSIGNED NOT NULL,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `key`, `value`, `created_at`, `updated_at`) VALUES
(1, 'daily_roi_percent', '1.0', NULL, '2025-07-30 00:32:14'),
(2, 'coin_value_usd', '1', '2025-07-29 05:06:29', '2025-08-14 02:23:34'),
(3, 'presale_end_date', '2025-08-22', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `setting_logs`
--

CREATE TABLE `setting_logs` (
  `id` bigint UNSIGNED NOT NULL,
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `old_value` text COLLATE utf8mb4_unicode_ci,
  `new_value` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_by` bigint UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `setting_logs`
--

INSERT INTO `setting_logs` (`id`, `key`, `old_value`, `new_value`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'daily_roi_percent', '1.0', '1.1', 1, '2025-07-30 00:32:02', '2025-07-30 00:32:02'),
(2, 'coin_value_usd', '10', '11', 1, '2025-07-30 00:32:02', '2025-07-30 00:32:02'),
(3, 'daily_roi_percent', '1.1', '1.0', 1, '2025-07-30 00:32:14', '2025-07-30 00:32:14'),
(4, 'coin_value_usd', '11', '12', 1, '2025-07-30 00:32:14', '2025-07-30 00:32:14'),
(5, 'daily_roi_percent', '1.0', '1.0', 1, '2025-08-14 02:23:34', '2025-08-14 02:23:34'),
(6, 'coin_value_usd', '12', '1', 1, '2025-08-14 02:23:34', '2025-08-14 02:23:34');

-- --------------------------------------------------------

--
-- Table structure for table `stakes`
--

CREATE TABLE `stakes` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `amount` decimal(16,8) NOT NULL,
  `coin` int DEFAULT NULL,
  `start_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stakes`
--

INSERT INTO `stakes` (`id`, `user_id`, `amount`, `coin`, `start_date`, `created_at`, `updated_at`) VALUES
(1, 2, '0.00000000', 0, '2025-08-14', '2025-08-14 04:29:17', '2025-08-14 04:29:17'),
(2, 2, '1.00000000', 8, '2025-08-14', '2025-08-14 04:30:16', '2025-08-14 04:30:16'),
(3, 2, '0.00000000', 0, '2025-08-14', '2025-08-14 04:37:11', '2025-08-14 04:37:11'),
(4, 2, '2.00000000', 200, '2025-08-14', '2025-08-14 04:37:57', '2025-08-14 04:37:57');

-- --------------------------------------------------------

--
-- Table structure for table `stake_timigs`
--

CREATE TABLE `stake_timigs` (
  `id` bigint UNSIGNED NOT NULL,
  `timing` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `unique_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `referral_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active_status` int NOT NULL DEFAULT '0',
  `wallet_balance` decimal(15,2) NOT NULL DEFAULT '0.00',
  `referral_bonus` decimal(15,2) DEFAULT NULL,
  `custom_growth_percent` decimal(5,2) DEFAULT NULL,
  `amount_usd` decimal(15,8) DEFAULT NULL,
  `withdrawan_status` int NOT NULL DEFAULT '0',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_type` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `unique_id`, `referral_id`, `name`, `email`, `active_status`, `wallet_balance`, `referral_bonus`, `custom_growth_percent`, `amount_usd`, `withdrawan_status`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `user_type`) VALUES
(1, NULL, NULL, 'Admin', 'banajyotidas@gmail.com', 0, '0.00', NULL, NULL, NULL, 2, NULL, '$2y$10$ihxm92o9FwU8XjUkt6SFper7PO.2ANrolYTu64ooloMeVguUhmuNa', NULL, '2025-07-24 03:04:09', '2025-08-21 06:05:21', 1),
(2, 'RWC12345', NULL, 'banajyoti', 'banajyoti@gmail.com', 1, '4.16', NULL, '1.00', '12.00000000', 1, NULL, '$2y$10$ihxm92o9FwU8XjUkt6SFper7PO.2ANrolYTu64ooloMeVguUhmuNa', NULL, '2025-07-24 03:04:09', '2025-08-21 06:10:57', 2),
(3, 'D7IBNRSQ', '2', 'test', 'test@gamil.com', 0, '1.00', NULL, NULL, NULL, 0, NULL, '$2y$10$u3YSHvYlr5vjUO04xd5tm.MbqCJ02dLNdhOLL3/okGuuKQgP8m802', NULL, '2025-07-25 00:41:33', '2025-08-14 02:26:50', 2),
(4, '9F7NNRNU', 'RWC12345', 'aassdad', 'biplop@gmail.com', 0, '0.00', '0.04', NULL, NULL, 0, NULL, '$2y$10$oXpOqNaRbOilFOw29ut/0uMsCag5pI4rHcTMQsyINEBB1iZhy1gVy', NULL, '2025-07-25 00:43:51', '2025-07-30 23:53:35', 2),
(5, 'CAR202508115', 'RWC12345', 'Sales', 'siddique@gmail.com', 0, '0.00', NULL, NULL, NULL, 0, NULL, '$2y$10$UNqcRVtxPpqHP3bk1kWTTeIPttVcozRxLnFmh0ia/pRrhZxL/hYga', NULL, '2025-07-25 00:50:02', '2025-07-30 23:55:09', 2),
(6, 'RWC202509863', 'RWC12345', 'edaasd', 'abubakkar1siddique@gmail.com', 0, '0.00', NULL, '1.00', NULL, 0, NULL, '$2y$10$8V82tovkMi4SkxeVe5qzE.LLocAv/GdqaB3/Pq9HXqQg3lVgI5kZ6', NULL, '2025-07-25 01:25:34', '2025-07-31 01:58:26', 2),
(7, 'RWC202528259', 'RWC12345', 'ssASASA', 'rrr@gmail.com', 0, '0.00', NULL, NULL, NULL, 0, NULL, '$2y$10$Y3pYajac95B4j88zxBbCPez6knehJjiUYzYjCfnQ19wkhiJdW4ge6', NULL, '2025-07-25 01:41:36', '2025-07-25 01:41:36', 2),
(8, 'RWC202536631', 'RWC12345', 'Sales', 'ddd@d.in', 0, '0.54', NULL, NULL, NULL, 0, NULL, '$2y$10$7z2b/6fR/aZsnSwBMRFkGuWT03.Z8vtAsULZtvJUuAHueYbWq.US2', NULL, '2025-07-25 01:46:15', '2025-07-30 22:34:23', 2),
(9, 'RWC202504377', 'CAR202508115', 'texting', 'texting@gmail.com', 0, '0.00', '0.01', NULL, NULL, 0, NULL, '$2y$10$t2J6q.7OAErQzr5X3WzobuS9k7ssOryf5Mlt9wvE7p6kCkRvxqXs2', NULL, '2025-07-25 03:43:50', '2025-07-30 23:54:50', 2),
(10, 'RWC202552336', 'RWC12345', 'terthjj', 'ff@f.in', 0, '0.00', NULL, NULL, NULL, 0, NULL, '$2y$10$cUXlSolpbSx6A2rmOTTxIeqSieOPSYpL5tiXFxL6hI2CzySntnoiq', NULL, '2025-07-25 06:18:27', '2025-07-29 01:24:44', 2),
(11, 'RWC202564922', NULL, 'tesst', 't@t.com', 0, '0.00', NULL, NULL, NULL, 0, NULL, '$2y$10$z085aRB2Bz9t75WqrraDReioC5s/Y1pN1DDnv0jVgfRd886Z4edoe', NULL, '2025-08-20 22:24:46', '2025-08-20 22:24:46', 2),
(12, 'RWC202503739', 'RWC202564922', 'test test', 'h@h.in', 0, '0.00', NULL, NULL, NULL, 0, NULL, '$2y$10$DtxjBVLp3DXt7MhkbT8vy.wYjFZwkivV/PIpeZgKRpo52DVxAuuFu', NULL, '2025-08-21 05:16:03', '2025-08-21 05:16:03', 2);

-- --------------------------------------------------------

--
-- Table structure for table `wallet_addresses`
--

CREATE TABLE `wallet_addresses` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wallet_addresses`
--

INSERT INTO `wallet_addresses` (`id`, `user_id`, `name`, `created_at`, `updated_at`) VALUES
(1, 2, 'address nam', '2025-08-21 04:48:10', '2025-08-21 04:48:20');

-- --------------------------------------------------------

--
-- Table structure for table `withdrawans`
--

CREATE TABLE `withdrawans` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `status` int NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `withdrawans`
--

INSERT INTO `withdrawans` (`id`, `user_id`, `amount`, `date`, `status`, `created_at`, `updated_at`) VALUES
(1, '2', '1', '2025-08-21', 3, '2025-08-21 03:31:10', '2025-08-21 03:59:49'),
(2, '2', '1', '2025-08-21', 2, '2025-08-21 03:31:18', '2025-08-21 03:59:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `coins`
--
ALTER TABLE `coins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `coins_symbol_unique` (`symbol`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `login_activities`
--
ALTER TABLE `login_activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `payments_invoice_id_unique` (`invoice_id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `referral_bonuses`
--
ALTER TABLE `referral_bonuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `referral_settings`
--
ALTER TABLE `referral_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roi_logs`
--
ALTER TABLE `roi_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roi_logs_user_id_foreign` (`user_id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `settings_key_unique` (`key`);

--
-- Indexes for table `setting_logs`
--
ALTER TABLE `setting_logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stakes`
--
ALTER TABLE `stakes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stake_timigs`
--
ALTER TABLE `stake_timigs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `wallet_addresses`
--
ALTER TABLE `wallet_addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `withdrawans`
--
ALTER TABLE `withdrawans`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `coins`
--
ALTER TABLE `coins`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `login_activities`
--
ALTER TABLE `login_activities`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `referral_bonuses`
--
ALTER TABLE `referral_bonuses`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `referral_settings`
--
ALTER TABLE `referral_settings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `roi_logs`
--
ALTER TABLE `roi_logs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `setting_logs`
--
ALTER TABLE `setting_logs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `stakes`
--
ALTER TABLE `stakes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `stake_timigs`
--
ALTER TABLE `stake_timigs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `wallet_addresses`
--
ALTER TABLE `wallet_addresses`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `withdrawans`
--
ALTER TABLE `withdrawans`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `roi_logs`
--
ALTER TABLE `roi_logs`
  ADD CONSTRAINT `roi_logs_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
