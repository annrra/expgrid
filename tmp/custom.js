/** align items vertically in a grid layout*/
function reAlign() {
     var    $list            = $( '.tnc-post-container' ),
            $itemsTitle      = $list.find( '.tnc-content-wrap' ),
            $itemsBlock      = $list.find( '.tnc-content-wrap .tnc-entry-data' ),
            $itemsThumb      = $list.find( '.content-wrap .header-area' );
    $itemsTitle.css( 'height', 'auto' );
    $itemsBlock.css( 'height', 'auto' );
    $itemsThumb.css( 'height', 'auto' );

    var perRow = Math.floor( $list.width() / $itemsTitle.width() );
    if( perRow == null || perRow < 2 ) return true;

    for( var i = 0, j = $itemsTitle.length; i < j; i += perRow ) {
        var maxHeight   = 0,
            $row        = $itemsTitle.slice( i, i + perRow );

        $row.each( function() {
            var itemHeight = parseInt( $( this ).outerHeight() );
            if ( itemHeight > maxHeight ) maxHeight = itemHeight;
        });
        $row.css( 'height', maxHeight );
    }
    for( var i = 0, j = $itemsBlock.length; i < j; i += perRow ) {
        var maxHeightBlock   = 0,
            $rowBlock        = $itemsBlock.slice( i, i + perRow );

        $rowBlock.each( function() {
            var itemHeight = parseInt( $( this ).outerHeight() );
            if ( itemHeight > maxHeightBlock ) maxHeightBlock = itemHeight;
        });
        $rowBlock.css( 'height', maxHeightBlock );
    }
    for( var i = 0, j = $itemsThumb.length; i < j; i += perRow ) {
        var maxHeightThumb   = 0,
            $rowThumb        = $itemsThumb.slice( i, i + perRow );

        $rowThumb.each( function() {
            var itemHeight = parseInt( $( this ).outerHeight() );
            if ( itemHeight > maxHeightThumb ) maxHeightThumb = itemHeight;
        });
        $rowThumb.css( 'height', maxHeightThumb );
    }
}

reAlign();
$( window ).on( 'resize', reAlign );

$( document ).ajaxComplete( function () {
    reAlign();
    
    setTimeout( function () {
        reAlign();
    }, 500 );
    
    setTimeout( function () {
        reAlign();
    }, 1500 );

} );