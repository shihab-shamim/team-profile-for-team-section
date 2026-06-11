<?php
/**
 * Plugin Name: Team Profiles
 * Description: Team Profiles is a WordPress plugin that allows you to create team profiles on your website.
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain:info-cards
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'TP_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'TP_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'TP_DIR_PATH', plugin_dir_path( __FILE__ ) );

if( !class_exists( 'TPPlugin' ) ){
	class TPPlugin{
		function __construct(){
			add_action( 'init', [ $this, 'onInit' ] );
		}

		function onInit(){
			register_block_type( __DIR__ . '/build' );
		}
	}
	new TPPlugin();
}