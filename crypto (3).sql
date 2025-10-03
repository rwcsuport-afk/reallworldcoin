-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 26, 2025 at 05:38 PM
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
-- Table structure for table `icici_payments`
--

CREATE TABLE `icici_payments` (
  `id` bigint UNSIGNED NOT NULL,
  `tranRefNo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `senderAcctNo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `beneAccNo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `beneName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `beneIFSC` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `narration1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `narration2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `crpId` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `crpUsr` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `aggrId` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `aggrName` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `urn` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `txnType` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `WORKFLOW_REQD` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `BENLEI` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `uniqueId` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remarks` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `localTxnDtTime` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paymentRef` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `retailerCode` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `passCode` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bcId` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
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
(102, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-08-21 11:35:36', NULL, '2025-08-21 06:05:36', '2025-08-21 06:05:36'),
(103, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-09-02 08:03:51', NULL, '2025-09-02 02:33:51', '2025-09-02 02:33:51'),
(104, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-09-02 10:57:41', NULL, '2025-09-02 05:27:41', '2025-09-02 05:27:41'),
(105, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-09-02 10:58:02', NULL, '2025-09-02 05:28:02', '2025-09-02 05:28:02'),
(106, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-09-03 07:58:03', NULL, '2025-09-03 02:28:03', '2025-09-03 02:28:03'),
(107, 2, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-09-03 10:31:07', NULL, '2025-09-03 05:01:07', '2025-09-03 05:01:07'),
(108, 14, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-09-25 10:48:56', '2025-09-25 10:49:00', '2025-09-25 05:18:56', '2025-09-25 05:19:00'),
(109, 14, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-09-25 10:49:51', '2025-09-25 11:06:13', '2025-09-25 05:19:51', '2025-09-25 05:36:13'),
(110, 15, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-09-25 11:06:51', '2025-09-25 11:07:21', '2025-09-25 05:36:51', '2025-09-25 05:37:21'),
(111, 14, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-09-25 11:07:46', NULL, '2025-09-25 05:37:46', '2025-09-25 05:37:46'),
(112, 1, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-09-26 03:45:48', '2025-09-26 05:08:27', '2025-09-25 22:15:48', '2025-09-25 23:38:27'),
(113, 15, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-09-26 05:09:14', NULL, '2025-09-25 23:39:14', '2025-09-25 23:39:14'),
(114, 15, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 'Linux', '127.0.0.1', '2025-09-26 08:18:32', NULL, '2025-09-26 02:48:32', '2025-09-26 02:48:32');

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
(26, '2025_08_21_100943_create_wallet_addresses_table', 21),
(27, '2025_08_22_093045_create_transactions_table', 22),
(28, '2025_09_05_091734_create_icici_payments_table', 23),
(29, '2025_09_25_092649_add_from_address_to_stakes_table', 24),
(30, '2025_09_25_100846_add_user_id_to_users_table', 25),
(31, '2025_09_26_051907_create_wallet_balances_table', 26),
(32, '2025_08_21_094429_create_wallet_address_table', 27),
(33, '2025_09_26_052143_create_wallet_balances_table', 27),
(34, '2025_09_26_091534_create_rwc_coins_table', 28);

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
(7, 2, '0.16', '2025-07-30', '2025-07-29 23:29:09', '2025-07-29 23:29:09'),
(9, 2, '0.18', '2025-07-31', '2025-07-30 22:31:30', '2025-07-30 22:31:30'),
(11, 2, '2.08', '2025-08-14', '2025-08-14 04:47:01', '2025-08-14 04:47:01'),
(12, 2, '2.08', '2025-08-21', '2025-08-21 06:10:57', '2025-08-21 06:10:57'),
(14, 2, '0.00', '2025-09-03', '2025-09-03 04:02:41', '2025-09-03 04:02:41'),
(15, 15, '2.00', '2025-09-26', '2025-09-26 04:52:19', '2025-09-26 04:52:19');

-- --------------------------------------------------------

--
-- Table structure for table `rwc_coins`
--

CREATE TABLE `rwc_coins` (
  `id` bigint UNSIGNED NOT NULL,
  `from_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rwc_coin` decimal(18,8) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rwc_coins`
--

INSERT INTO `rwc_coins` (`id`, `from_address`, `rwc_coin`, `created_at`, `updated_at`) VALUES
(1, '0xab73209955ebf551f25ae24915f429d0584a5863', '200.00000000', '2025-09-26 04:12:24', '2025-09-26 04:12:24');

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
(3, 'presale_end_date', '2025-08-30', NULL, NULL);

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
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `hash` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `from_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `to_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `token_symbol` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value_formatted` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `summary` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `block_timestamp` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transaction_fee` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` decimal(16,8) DEFAULT NULL,
  `coin` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `wallet_update_status` int NOT NULL DEFAULT '0',
  `start_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stakes`
--

INSERT INTO `stakes` (`id`, `user_id`, `hash`, `from_address`, `to_address`, `token_symbol`, `value`, `value_formatted`, `summary`, `block_timestamp`, `transaction_fee`, `amount`, `coin`, `wallet_update_status`, `start_date`, `created_at`, `updated_at`) VALUES
(1, NULL, '0x1cbb410a89e67c7e81b6988e2ff30d9c003babe95579acec0f5b409306f2f6d5', '0xf72d549f5db6c1e495e021872671ee6d0828ec65', '0xbf614db09ce9763a69f2731aef99b1623410b926', 'BNB', '3900000000000', '0.0000039', 'Received 0.0000039 BNB from 0xf7...ec65', '2025-09-25T08:39:22.000Z', '0.0000021', '1.00000000', 'BNB', 0, '2025-09-25', '2025-09-25 04:32:47', '2025-09-26 02:36:42'),
(2, NULL, '0xdcbe800fbb75cc6873a7c2f3a9436b78b0b49085268acc50152adf2d9a94c4b7', '0xbf614db09ce9763a69f2731aef99b1623410b926', '0xf72d549f5db6c1e495e021872671ee6d0828ec65', 'BNB', '6000000000000', '0.000006', 'Sent 0.000006 BNB to 0xf7...ec65', '2025-09-25T08:37:55.000Z', '0.0000021', '0.00000600', 'BNB', 0, '2025-09-25', '2025-09-25 04:32:47', '2025-09-26 02:36:42'),
(3, NULL, '0xc47a4065751f1e75a12b8bd971b4f288da6e4fb8bd25784ae0713f6ead7350cd', '0xab73209955ebf551f25ae24915f429d0584a5863', '0xbf614db09ce9763a69f2731aef99b1623410b926', 'BNB', '60000000000000', '0.00006', 'Received 0.00006 BNB from 0xab...5863', '2025-09-25T08:09:37.000Z', '0.0000021', '0.00006000', 'BNB', 0, '2025-09-25', '2025-09-25 04:32:47', '2025-09-26 02:36:42'),
(4, NULL, '0x44d3943215c4367b3d5817c1101e3296360309b6719d340564eac8b19353f845', '0xbf614db09ce9763a69f2731aef99b1623410b926', '0xab73209955ebf551f25ae24915f429d0584a5863', 'BNB', '500000000000', '5e-7', 'Sent 0.0000005 BNB to 0xab...5863', '2025-09-25T07:55:21.000Z', '0.0000021', '0.00000050', 'BNB', 0, '2025-09-25', '2025-09-25 04:32:47', '2025-09-26 02:36:42'),
(5, NULL, '0xcff44d192daae73fcc9d195369f1d45209724145827a4ba7e8453fbe29c0740e', '0x216706ae5d40ad131b6e09bc4bf7d0d78b554657', '0x517070b8af6dc92b932d2ff279da41d805bc0f4e', 'UЅDТ', '950000000000000000', '0.95', 'Sent 0.95 UЅDТ to 0xaa...58d7', '2025-09-06T11:01:20.000Z', '0.0000384832', '0.95000000', 'UЅDТ', 0, '2025-09-25', '2025-09-25 04:32:47', '2025-09-26 02:36:42'),
(6, NULL, '0x758fd39ceca3b75a87ac9d9379f4fea94f130a198878e6e7d5d916a0f18f72fe', '0xbf614db09ce9763a69f2731aef99b1623410b926', '0x55d398326f99059ff775485246999027b3197955', 'USDT', '950000000000000000', '0.95', 'Sent 0.95 USDT to 0xaa...58d7', '2025-09-06T10:54:15.000Z', '0', '0.95000000', 'USDT', 0, '2025-09-25', '2025-09-25 04:32:47', '2025-09-26 02:36:42'),
(7, NULL, '0x6b8b72ba8b14864de077270bc4d448d1c35b20fc288e2db430ea63b044fe1a9a', '0xbf614db09ce9763a69f2731aef99b1623410b926', '0xaa4fa543376e0777b23727ebdd27bb6ceee058d7', 'BNB', '500000000000000', '0.0005', 'Sent 0.0005 BNB to 0xaa...58d7', '2025-09-06T10:53:00.000Z', '0.0000021', '0.00050000', 'BNB', 0, '2025-09-25', '2025-09-25 04:32:47', '2025-09-26 02:36:42'),
(8, NULL, '0xcc3119343d59f51c314c94abdd3b4dac24216282727df1875b8a68231ce32b11', '0xbf614db09ce9763a69f2731aef99b1623410b926', '0x0a1ad99042f75253faaaa5a448325e7c0069e9fd', 'BNB', '1000000000000', '0.000001', 'Sent 0.000001 BNB to 0x0a...e9fd', '2025-09-02T04:55:55.000Z', '0.0000021', '0.00000100', 'BNB', 0, '2025-09-25', '2025-09-25 04:32:47', '2025-09-26 02:36:42'),
(9, NULL, '0xcd574fe19af7895b01fec6cdf8496e1d2075242e4953a10dd60ccf2939b62a14', '0xab73209955ebf551f25ae24915f429d0584a5863', '0xbf614db09ce9763a69f2731aef99b1623410b926', 'BNB', '10000000000000', '0.00001', 'Received 0.00001 BNB from 0xab...5863', '2025-09-01T11:30:41.000Z', '0.0000021', '0.00001000', 'BNB', 0, '2025-09-25', '2025-09-25 04:32:47', '2025-09-26 02:36:42'),
(10, NULL, '0x5f78deec55eb97b8133147bdfb3c346d9ae83bfc73c1cd1ec4f0babe8bf60eea', '0xbf614db09ce9763a69f2731aef99b1623410b926', '0x55d398326f99059ff775485246999027b3197955', 'USDT', '1000000', '0.000000000001', 'Sent 0 USDT to 0x0a...e9fd', '2025-09-01T06:17:02.000Z', '0.0000051555', '0.00000000', 'USDT', 0, '2025-09-25', '2025-09-25 04:32:47', '2025-09-26 02:36:42'),
(11, NULL, '0xf7897fb69636d9409385c33d675b4467cca0cec9b49af930da3db6c62e001231', '0xab73209955ebf551f25ae24915f429d0584a5863', '0x55d398326f99059ff775485246999027b3197955', 'USDT', '999925382319943864', '0.9999253823199438', 'Received 0.9999 USDT from 0xab...5863', '2025-09-01T06:15:34.000Z', '0', '0.99992538', 'USDT', 0, '2025-09-25', '2025-09-25 04:32:47', '2025-09-26 02:36:42'),
(12, NULL, '0x3579c67aab6727508a40539aaed83125fa402e60cf476cb2b0aa77d77600cb71', '0xab73209955ebf551f25ae24915f429d0584a5863', '0xbf614db09ce9763a69f2731aef99b1623410b926', 'BNB', '1189008906373053', '0.001189008906373053', 'Received 0.001189 BNB from 0xab...5863', '2025-08-26T07:04:24.000Z', '0.0000021', '0.00118901', 'BNB', 0, '2025-09-25', '2025-09-25 04:32:47', '2025-09-26 02:36:42'),
(15, NULL, '0x3579c67aab6727508a40539aaed83125fa402e60cf476cb2b0aa77d77600cb55', '0xab73209955ebf551f25ae24915f429d0584a5863', '0xbf614db09ce9763a69f2731aef99b1623410b926', 'BNB', '1189008906373053', '0.001189008906373053', 'Received 0.001189 BNB from 0xab...5863', '2025-08-26T07:04:24.000Z', '0.0000021', '1.00000000', 'BNB', 0, '2025-09-25', '2025-09-25 04:32:47', '2025-09-26 02:37:48'),
(16, NULL, '0x3579c67aab6727508a40539aaed83125fa402e60cf476cb2b0aa77d77600cb63', '0xab73209955ebf551f25ae24915f429d0584a5777', '0xbf614db09ce9763a69f2731aef99b1623410b926', 'BNB', '1189008906373053', '0.001189008906373053', 'Received 0.001189 BNB from 0xab...5863', '2025-08-26T07:04:24.000Z', '0.0000021', '1.00000000', 'BNB', 0, '2025-09-25', '2025-09-25 04:32:47', '2025-09-26 02:43:08'),
(17, NULL, '0xab133634e78e9a6798ffeb68eae2fdde02127f3d85de4650126342e203d283af', '0xab73209955ebf551f25ae24915f429d0584a5863', '0xbf614db09ce9763a69f2731aef99b1623410b926', 'BNB', '100000000000', '1e-7', 'Received 0.0000001 BNB from 0xab...5863', '2025-09-26T07:11:51.000Z', '0.0000021', '0.00000010', 'BNB', 0, '2025-09-26', '2025-09-26 03:41:39', '2025-09-26 03:41:39'),
(18, NULL, '0xc7f611526eedf7a51a4b0e3b7b487dee472954cecf5fbd7fddc55747a1ccf40b', '0xbf614db09ce9763a69f2731aef99b1623410b926', '0xab73209955ebf551f25ae24915f429d0584a5863', 'BNB', '20000000000', '2e-8', 'Sent 0.00000002 BNB to 0xab...5863', '2025-09-26T07:07:56.000Z', '0.0000021', '0.00000002', 'BNB', 0, '2025-09-26', '2025-09-26 03:41:39', '2025-09-26 03:41:39'),
(19, NULL, '0xb5e0fec0cb251b4683db2920a7efd863b40fc189b6c28dea1bfd88676f3445c7', '0xab73209955ebf551f25ae24915f429d0584a5863', '0x55d398326f99059ff775485246999027b3197955', 'USDT', '10000000000000', '0.00001', 'Received 0.00001 USDT from 0xab...5863', '2025-09-26T06:56:45.000Z', '0.0000034491', '0.00001000', 'USDT', 0, '2025-09-26', '2025-09-26 03:41:39', '2025-09-26 03:41:39');

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
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint UNSIGNED NOT NULL,
  `tx_hash` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `from_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` decimal(18,8) NOT NULL,
  `token_received` decimal(18,8) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `unique_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `referral_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active_status` int NOT NULL DEFAULT '0',
  `wallet_balance` decimal(15,8) NOT NULL DEFAULT '0.00000000',
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

INSERT INTO `users` (`id`, `user_id`, `unique_id`, `referral_id`, `name`, `email`, `active_status`, `wallet_balance`, `referral_bonus`, `custom_growth_percent`, `amount_usd`, `withdrawan_status`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `user_type`) VALUES
(1, '0xbf614db09ce9763a69f2731aef99b1623410b926', NULL, NULL, 'Admin', 'banajyotidas@gmail.com', 0, '0.00000000', NULL, NULL, NULL, 2, NULL, '$2y$10$ihxm92o9FwU8XjUkt6SFper7PO.2ANrolYTu64ooloMeVguUhmuNa', NULL, '2025-07-24 03:04:09', '2025-09-25 23:38:27', 1),
(2, NULL, 'RWC12345', NULL, 'banajyoti', 'banajyoti@gmail.com', 1, '0.00000000', NULL, NULL, NULL, 1, NULL, '$2y$10$ihxm92o9FwU8XjUkt6SFper7PO.2ANrolYTu64ooloMeVguUhmuNa', NULL, '2025-07-24 03:04:09', '2025-09-03 04:02:41', 2),
(13, NULL, 'RWC202510197', NULL, 'fsdfdsfsdf', 'ddd@d.in', 0, '0.00000000', NULL, NULL, NULL, 0, NULL, '$2y$10$YezVRSPY1jXMaX1/QUgqGuZjx4nW/p6epXkuRDUxYdguV6zmuOwTi', NULL, '2025-09-25 05:04:20', '2025-09-25 05:04:20', 2),
(14, '0xf72d549f5db6c1e495e021872671ee6d0828ec65', 'RWC202564649', NULL, 'efdsdfsdf', 'banajyot1i@gmail.com', 1, '0.00000000', NULL, NULL, NULL, 0, NULL, '$2y$10$9T7.t9nPEtzeS6BCLywKLuOyiX9kGBVGmIAQrPdohxblKKDm.LOJi', NULL, '2025-09-25 05:11:54', '2025-09-25 05:37:46', 2),
(15, '0xab73209955ebf551f25ae24915f429d0584a5863', 'RWC202546142', NULL, 'testing', 'biplop@gmail.com', 1, '2.00000000', NULL, NULL, NULL, 0, NULL, '$2y$10$ap68X8iIfiViSG.UiWJkzuidoxkqoFABtJI75zt9Xf3RcOeFrj5Nu', NULL, '2025-09-25 05:36:33', '2025-09-26 04:52:19', 2);

-- --------------------------------------------------------

--
-- Table structure for table `wallet_address`
--

CREATE TABLE `wallet_address` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
-- Table structure for table `wallet_balances`
--

CREATE TABLE `wallet_balances` (
  `id` bigint UNSIGNED NOT NULL,
  `hash` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `from_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` decimal(16,8) DEFAULT NULL,
  `amount_debited` decimal(16,8) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wallet_balances`
--

INSERT INTO `wallet_balances` (`id`, `hash`, `from_address`, `amount`, `amount_debited`, `created_at`, `updated_at`) VALUES
(1, '0x1cbb410a89e67c7e81b6988e2ff30d9c003babe95579acec0f5b409306f2f6d5', '0xf72d549f5db6c1e495e021872671ee6d0828ec65', '4700.25000000', NULL, '2025-09-26 06:08:02', '2025-09-26 06:08:07'),
(2, '0xc7f611526eedf7a51a4b0e3b7b487dee472954cecf5fbd7fddc55747a1ccf40b', '0xbf614db09ce9763a69f2731aef99b1623410b926', '16.64022090', NULL, '2025-09-26 06:08:02', '2025-09-26 06:08:07'),
(3, '0xb5e0fec0cb251b4683db2920a7efd863b40fc189b6c28dea1bfd88676f3445c7', '0xab73209955ebf551f25ae24915f429d0584a5863', '4721.17216220', NULL, '2025-09-26 06:08:02', '2025-09-26 06:08:07'),
(4, '0xcff44d192daae73fcc9d195369f1d45209724145827a4ba7e8453fbe29c0740e', '0x216706ae5d40ad131b6e09bc4bf7d0d78b554657', '14.25000000', NULL, '2025-09-26 06:08:02', '2025-09-26 06:08:07'),
(5, '0x3579c67aab6727508a40539aaed83125fa402e60cf476cb2b0aa77d77600cb63', '0xab73209955ebf551f25ae24915f429d0584a5777', '4700.25000000', NULL, '2025-09-26 06:08:02', '2025-09-26 06:08:07');

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
-- Indexes for table `icici_payments`
--
ALTER TABLE `icici_payments`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `rwc_coins`
--
ALTER TABLE `rwc_coins`
  ADD PRIMARY KEY (`id`);

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
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `hash` (`hash`);

--
-- Indexes for table `stake_timigs`
--
ALTER TABLE `stake_timigs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `transactions_tx_hash_unique` (`tx_hash`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `wallet_address`
--
ALTER TABLE `wallet_address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallet_addresses`
--
ALTER TABLE `wallet_addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallet_balances`
--
ALTER TABLE `wallet_balances`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `hash` (`hash`);

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
-- AUTO_INCREMENT for table `icici_payments`
--
ALTER TABLE `icici_payments`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `login_activities`
--
ALTER TABLE `login_activities`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

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
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `rwc_coins`
--
ALTER TABLE `rwc_coins`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `stake_timigs`
--
ALTER TABLE `stake_timigs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `wallet_address`
--
ALTER TABLE `wallet_address`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wallet_addresses`
--
ALTER TABLE `wallet_addresses`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `wallet_balances`
--
ALTER TABLE `wallet_balances`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
