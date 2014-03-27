var wii = require( '../build/Release/node-wii.node' );

var wiimote = new wii.WiiMote();

wiimote.connect( '00:17:AB:39:42:B1', function( err ) {
  console.log( err );
  wiimote.rumble( true );
  setTimeout(function() { wiimote.rumble( false ); }, 1000);

  wiimote.ext( true );
  wiimote.on( 'nunchuk', function( err, data ) {
    console.log( data );
  });
});
