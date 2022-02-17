-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2022 at 09:11 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rnrc`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `reason` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `event_id` varchar(255) DEFAULT NULL,
  `progress_status` tinyint(4) DEFAULT NULL,
  `appearance_status` tinyint(4) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `first_name`, `last_name`, `email`, `date`, `start_time`, `end_time`, `reason`, `password`, `event_id`, `progress_status`, `appearance_status`, `updated_at`, `created_at`) VALUES
(1, 'Hedley', 'Jacob', 'hodejodu@mailinator.com', '2022-01-26', '2022-01-26 12:00:00', '2022-01-26 15:00:00', 'Jerry', NULL, '3ig50507eoso1s0tlrjeo4md6o', 0, 0, '2022-01-26 12:18:00', '2022-01-26 12:18:00'),
(2, 'Ryan', 'Lester', 'moxytaf@mailinator.com', '2022-01-26', '2022-01-26 09:00:00', '2022-01-26 10:00:00', 'Kendall', NULL, '7cqngh6hiul90q35vefqu7bb08', 0, 0, '2022-01-26 12:26:31', '2022-01-26 12:18:23'),
(3, 'Cade', 'Leilani', 'syjol@mailinator.com', '2022-01-26', '2022-01-26 10:00:00', '2022-01-26 12:00:00', 'Jade', NULL, NULL, 1, 1, '2022-01-26 12:21:31', '2022-01-26 12:21:31'),
(4, 'Barclay', 'Sophia', 'vekyq@mailinator.com', '2022-01-26', '2022-01-26 10:00:00', '2022-01-26 12:00:00', 'Quin', NULL, NULL, 3, 2, '2022-01-26 12:36:58', '2022-01-26 12:23:41'),
(5, 'Keegan', 'Samuel', 'bexexef@mailinator.com', '2022-01-26', '2022-01-26 15:00:00', '2022-01-26 16:00:00', 'Rae', NULL, 'r88b83qu35cjt1u132j5u9duik', 0, 0, '2022-01-26 12:24:03', '2022-01-26 12:24:03'),
(6, 'Nina', 'Hilary', 'pimemyryte@mailinator.com', '2022-01-26', '2022-01-26 14:00:00', '2022-01-26 16:00:00', 'Judith', NULL, NULL, 1, 1, '2022-01-26 12:24:28', '2022-01-26 12:24:28'),
(7, 'Jordan', 'Nevada', 'ryruzyv@mailinator.com', '2022-01-26', '2022-01-26 09:00:00', '2022-01-26 14:00:00', 'Freya', NULL, NULL, 1, 1, '2022-01-26 12:25:49', '2022-01-26 12:25:49'),
(8, 'Barclay', 'Sophia', 'vekyq@mailinator.com', '2022-01-26', '2022-01-26 10:00:00', '2022-01-26 12:00:00', 'Quin', NULL, 'r0cq8ka9tcg13cjepj316f8ob4', 0, 0, '2022-01-26 12:56:15', '2022-01-26 12:56:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
