<?php
/**
 * JAAS BD Platform - Entry Point for Local XAMPP
 * Automatically verifies database and serves the website
 */

require_once __DIR__ . '/db.php';

// Trigger database readiness check
$pdo = getDB();

// Render homepage
include __DIR__ . '/index.html';
