<?php
/*wp related snippets of code*/



/*********************************/
/*Detect user’s web browser and add a class with it’s name to the body tag // add in functions.php and enjoy*/
add_filter('body_class','browser_body_class');
function browser_body_class($classes) {
	global $is_lynx, $is_gecko, $is_IE, $is_opera, $is_NS4, $is_safari, $is_chrome, $is_iphone;

	if($is_lynx) $classes[] = 'lynx';
	elseif($is_gecko) $classes[] = 'gecko';
	elseif($is_opera) $classes[] = 'opera';
	elseif($is_NS4) $classes[] = 'ns4';
	elseif($is_safari) $classes[] = 'safari';
	elseif($is_chrome) $classes[] = 'chrome';
	elseif($is_IE) $classes[] = 'ie';
	else $classes[] = 'unknown';

	if($is_iphone) $classes[] = 'iphone';
	return $classes;
}
/*********************************/




/*********************************/
/*Add contextual help menu to 'my_plugin_menu' pages in admin area*/
/*
add_action('admin_menu', 'my_plugin_menu');
function my_plugin_menu() {
 	global $my_plugin_hook;
 	$my_plugin_hook = add_options_page('My Plugin Options', 'My Plugin', 'manage_options', 'my-unique-identifier', 'my_plugin_options');
}
*/
/*Add contextual help menu to "gd_place" pages in admin area*/
function geodirectory_help($contextual_help, $screen_id, $screen) {
	/*global $my_plugin_hook;
    if ($screen_id == $my_plugin_hook) {*/
	if ($screen_id == 'gd_place') {
		$contextual_help = 'You can upload unlimited images with this package.<br /><span style="color:red;">Images should be 950px in width and 550px in height for best view.</span>';
	}
	return $contextual_help;
}
add_filter('contextual_help', 'geodirectory_help', 10, 3);
/*********************************/
?>