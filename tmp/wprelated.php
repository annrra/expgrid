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



/*********************************/
/*Codestar framework parse typography properties*/
//
// Helper for Typography Parser
// -------------------------------------
function cs_typography_parser( $typography ) {

  $out  = array();
  $font = cs_get_option( $typography );

  // family
  $out['family'] = $font['family'];

  // weight
  $weight = preg_replace( '/\D/', '', $font['variant'] );
  $out['weight'] = ( ! empty( $weight ) ) ? $weight : 'normal';

  // style
  $style = preg_replace( '/[0-9]/', '', $font['variant'] );
  $out['style'] = ( ! empty( $style ) && $style !== 'regular' ) ? $style : 'normal';

  return $out;
}

//
// Embed Typography
// -------------------------------------
$font = cs_typography_parser( 'heading_fonts' );

if( ! empty( $font ) ) {

  echo 'h1,h2,h3,h4,h5,h6 {';

    echo 'font-family:'. $font['family'] .';';
    echo 'font-weight:'. $font['weight'] .';';
    echo 'font-style:'. $font['style'] .';';

  echo '}';

}
/*********************************/
?>