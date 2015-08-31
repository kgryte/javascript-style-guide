'use strict';

// MODULES //

var RE = require( 'regex-function-name' ),
	isFunction = require( 'validate.io-function' ),
	isString = require( 'validate.io-string-primitive' );


// FUNCTION NAME //

/**
* FUNCTION: functionName( fcn )
*	Returns the name of a function.
*
* @param {Function} fcn - input function
* @returns {String} function name or null
*/
function functionName( fcn ) {
	var name;
	if ( !isFunction( fcn ) ) {
		throw new TypeError( 'invalid input argument. Must provide a function. Value: `' + fcn + '`.' );
	}
	if ( isString( fcn.name ) ) {
		name = fcn.name;
	} else {
		name = RE.exec( fcn.toString() )[ 1 ];
	}
	return (name === '') ? 'anonymous' : name;
} // end FUNCTION functionName()


// EXPORTS //

module.exports = functionName;
