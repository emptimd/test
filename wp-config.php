<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */
 
// Include local configuration
if (file_exists(dirname(__FILE__) . '/local-config.php')) {
	include(dirname(__FILE__) . '/local-config.php');
}

// Global DB config
if (!defined('DB_NAME')) {
	define('DB_NAME', "test-project");
}
if (!defined('DB_USER')) {
	define('DB_USER', "root");
}
if (!defined('DB_PASSWORD')) {
	define('DB_PASSWORD', "user");
}
if (!defined('DB_HOST')) {
	define('DB_HOST', "localhost");
}

/** Database Charset to use in creating database tables. */
if (!defined('DB_CHARSET')) {
	define('DB_CHARSET', 'utf8');
}

/** The Database Collate type. Don't change this if in doubt. */
if (!defined('DB_COLLATE')) {
	define('DB_COLLATE', '');
}


/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */

$table_prefix = "wp_";


/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'JstUVBVVP~A-du1|F<a_7)}j<o}f2.6QkR>6ny+c+eXg)Ro[ljD13tf5*j:L]l1x');
define('SECURE_AUTH_KEY',  'a~^V@0~8A>`-abbj6={- +Q19fir?5HT3CSsiBaPbs1#>6M8](Q!iFf=y+AY|[?D');
define('LOGGED_IN_KEY',    '~jQkd[Eps<%@p_{^3S=M68+E5-`-Y@s&qb*e^Z]z}}T3M|@UJ8il8X?EKQ;eU6kH');
define('NONCE_KEY',        'k(<Ih|Bfpx:Wn6_Jm)%<1_O6-1/Ag[NmwQ;oGlV?d9,(Rx&%ajpN-Y[ !@qsN+6H');
define('AUTH_SALT',        '@/G-UH`dgI1QVB41O/?uptF3[!|~J2JO@d|<Ju{J`kuAZ2I:+<n?O;Emw]0nn4r3');
define('SECURE_AUTH_SALT', '5j8Tu;;)fOr-Z{+MO{4$W|%|ajbr*Z`.ci)I@3GAH,k:KJxx.R[+VIyZ8>kdCp+g');
define('LOGGED_IN_SALT',   'qEn[wuUsX!x>pc$SCzb=z|e=@Lf4.FA>|P=},/KJDp$t:g>0{}I?f.tliR)+iUSx');
define('NONCE_SALT',       'll]0GKuWnpPDa`}Od?,~{xJ:5-So o_#J&4<}  [dNj~ipM|0[!S>;,LXrP08-;-');

/**#@-*/

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');


/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
if (!defined('WP_DEBUG')) {
	define('WP_DEBUG', false);
}

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
