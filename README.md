JavaScript Style Guide
======================

_An opinionated style guide for writing JavaScript._


## Table of Contents

1. 	[Intro](#intro)
1. 	[General Principles](#general-principles)
1. 	[Whitespace](#whitespace)
1. 	[Semicolons](#semicolons)
1. 	[Variables](#variables)
1. 	[Strings](#strings)
1. 	[Arrays](#arrays)
1. 	[Blocks](#blocks)
1. 	[Equality](#equality)
1. 	[Comments](#comments)
1. 	[Naming](#naming)
1. 	[Setters and Getters](#setters-and-getters)
1. 	[Method Chaining](#method-chaining)
1. 	[Native JavaScript](#native-javascript)
1. 	[Performance](#performance)
1. 	[Versioning](#versioning)
1. 	[Additional Resources](#additional-resources)


## Intro

Always abide by the __Law of Code Style Consistency__, or, in other words, _when in Rome, do as the Romans do_. 

While the code base to which you want to contribute may be a horrific mess in terms of aesthetic appearance and style, style consistency takes precendent over personal preference and canon. The more consistent a code base is in terms of style, the more readers of the code can focus on what the code does rather than deciphering changes in style.

So, even if your peers commit various _faux pas_ outlined below, as long as you are contributing to their code base, abide by their conventions.

A code base--module, repository, application, library, etc--should always appear to have a single author and not be a schizophrenic franken-mess. 

This stated, for those opportunities where are you the primary author, you should lead by example and write clean, readable, and testable code.

Hopefully, most of the conventions outlined below will help enable you to do so.



## General Principles

* Prefer standards to non-standards.
* Do one thing and do one thing well.
* Keep your code clean. Create feature branches for experimental development, extensive annotations, and/or alternative implementations.




## Whitespace

* Use tab indentation. Tab indentation allows the developer to specify the space indentation equivalent in her editor. For example, in [Sublime Text](http://www.sublimetext.com/), you can specify in your user preferences

```
"tab_width": 4
```

* Even if you must use spaces, __never__ mix tabs and spaces. This is formatting hell, as a simple find-and-replace is useless in the face of such chaos.

* Include 1 space before a leading brace.

``` javascript
// Do:
function query() {
	// Do something...
}

// Don't:
function query(){
	// Do something...
}
```

* Include 1 space before and after arguments for readability.

``` javascript
// Do:
function test( arg1, arg2, arg3 ) {
	// Do something...
}

// Don't:
function test(arg1,arg2,arg3) {
	// Do something...
}
```

* Include 1 space before and after array indices (when readability is maintained).

``` javascript
// Do:
var foo = bar[ 10 ];

// Don't:
var foo = bar[10];
```

* Use discretion when using spaces around array indices buried in braces.

``` javascript
var foo = myFunction( ( a === b ) ? bar[0] : bar[1] ) );
```

* Include 1 space before and after operators.

``` javascript
// Do:
var a = 1 + 1;

// Don't:
var a=1+1;
```

* Do __not__ include a space before or after unary operators.

``` javascript
// Do:
x = ++y;
z = z++;

// Don't:
x = ++ y;
z = z ++;
```

* Include 1 space after comment marks.

``` javascript
// Do:

// This is a single-line comment.

/**
* This is a multi-
* line comment.
*/


// Don't:

//This is a single-line comment.

/**
*This is a mult-
*line comment.
*/
```

* Indent when using method chaining.

``` javascript
// Do:
var svg = d3.select( '.main' )
	.append( 'svg:svg' )
		.attr( 'class', 'canvas' )
		.attr( 'data-id', Date.now() )
		.attr( 'width', 100 )
		.attr( 'height', 100 );

// Don't:
var svg = d3.select( '.main' ).append( 'svg:svg' ).attr( 'class', 'canvas' ).attr( 'data-id', Date.now() ).attr( 'width', 100 ).attr( 'height', 100 );
```

* Do __not__ introduce newlines between conditions.

``` javascript
// Do:
if ( foo === bar ) {
	// Do something...
} else if ( foo === beep ) {
	// Do something else...
} else {
	// Do something different...
}

// Don't:
if ( foo === bar ) {
	// Do something...
}
else if ( foo === beep ) {
	// Do something else...
}
else {
	// Do something different...
}
```

* Indent the `case` keyword within `switch` statements.

``` javascript
// Do:
switch( foo ) {
	case 'bar':
		// Do something...
		break;
	case 'beep';
		// Do something...
		break;
	default:
		// Do something...
}

// Don't:
switch( foo ) {
case 'bar':
	// Do something...
	break;
case 'beep';
	// Do something...
	break;
default:
	// Do something...
}
```





## Semicolons

* Always use semicolons. Missing semicolons are a source of bugs.

``` javascript
// Do:
if ( foo === bar ) {
	return true;
}

// Don't:
if ( foo === bar ) {
	return true
}
```





## Variables

* Do __not__ use leading commas when declaring multiple variables.

``` javascript
// Do:
var foo = 3,
	bar = null,
	beep = false,
	boop = 'hello';

// Don't:
var foo = 3
  , bar = null
  , beep = false
  , boop = 'hello';
```

* Do declare assigned variables first.

``` javascript
// Do:
var foo = 3,
	bar = null,
	beep,
	boop;

// Don't:
var beep, boop,
	foo = 3,
	bar = null;
```

* Do use a single `var` statement to declare multiple variables.

``` javascript
// Do:
var foo = 3,
	bar = null,
	beep = false,
	boop = 'hello';

// Don't:
var foo = 3;
var bar = null;
var beep = false;
var boop = 'hello';
```

* Do declare variables at the top of their scope. Doing so makes variable hoisting explicit.

``` javascript
// Do:
function myFunction() {
	var foo = 3,
		bar = null;

	if ( foo ) {
		// Do something...
	}

	bar = foo * 5;
}

// Don't:
function myFunction() {
	var foo = 3;

	if ( foo ) {
		// Do something...
	}

	var bar = foo * 5;
}
```





## Strings

* Use single quotes for strings.

``` javascript
// Do:
var str = 'Hello';

// Don't:
var str = "Hello";
```






## Arrays

* In general, use array literal syntax.

``` javascript
// Do:
var arr = [];

// Don't:
var arr = new Array();
```

* Do instantiate a new array when you know the array length.

``` javascript
// Do:
var arr = new Array( 100 );

for ( var i = 0; i < arr.length; i++ ) {
	arr[ i ] = Math.random();
}

// Don't:
var arr = [];

for ( var i = 0; i < 100; i++ ) {
	arr.push( Math.random() );
}
```

* Use `array.slice()` to copy an array ([JSPerf](http://jsperf.com/converting-arguments-to-an-array/7)).

``` javascript
// Do:
var copy = arr.slice();

// Don't:
var copy = [];

for ( var i = 0; i < arr.length; i++ ) {
	copy.push( arr[ i ] );
}
```

* To convert an array-like object to an array, use `array.slice()`.

``` javascript
// Do:
var args = Array.prototype.slice.call( arguments );

// Don't:
var args = [];

for ( var i = 0; i < arguments.length; i++ ) {
	args.push( arguments[ i ] );
}
```




## Objects

* Do split object properties over multiple lines.

``` javascript
// Do:
var obj = {
		'a': null,
		'b': 5,
		'c': function() {
			return true;
		},
		'd': ( foo === bar ) ? foo : bar
	};

// Don't:
var obj = { 'a': null, 'b': 5, 'c': function() { return true; }, 'd': ( foo === bar ) ? foo : bar };
```

* Do __not__ align object values.

``` javascript
// Do:
var obj = {
		'prop': true,
		'attribute': 'foo',
		'name': 'bar'
	};

// Don't:
var obj = {
		'prop'     : true,
		'attribute': 'foo',
		'name'     : 'bar'
	};
```

* Do __not__ include a trailing comma.

``` javascript
// Do:
var obj = {
		'prop': true,
		'attribute': 'foo',
		'name': 'bar'
	};

// Don't:
var obj = {
		'prop': true,
		'attribute': 'foo',
		'name': 'bar',
	};
```




## Functions

* Do place parentheses around immediately invoked function expressions (IIFE). Make a clear distinction between a function declaration and one that is immediately invoked.

``` javascript
// Do:
(function init() {
	// Do something...
})();

// Don't:
function init() {
	// Do something...
}();
```





## Blocks

* Always use curly braces. Not using them is a common source of bugs.

``` javascript
// Do:
if ( foo === bar ) {
	return true;
}

// Don't:
if ( foo === bar ) return true;
```

* Always place the leading brace on the same line.

``` javascript
// Do:
if ( foo === bar ) {
	// Do something...
}

function query() {
	// Do something...
}

// Don't:
if ( foo === bar )
{
	// Do something...
}

function query()
{
	// Do something...
}
```





## Equality

* Always prefer `===` and `!==` to `==` and `!=`. Not enforcing type equality is a source of bugs.

``` javascript
// Do:
if ( foo === bar ) {
	// Do something...
}

// Don't:
if ( foo != bar ) {
	// Do something...
}
```







## Comments

* Use `/** Comments */` for mult-line comments.

``` javascript
// Do:

/**
* FUNCTION: beep()
*	Beep to go boop.
*/
function beep() {
	// Do something...
}

// Don't:

// FUNCTION: beep()
//	Beep to go boop.
function beep() {
	// Do something...
}
```

* Do use [JSDoc](http://usejsdoc.org/#Getting_Started) and do so for every function. Be sure to include descriptions, parameters, and other information.

``` javascript
// Do:

/**
* FUNCTION: transform( str )
*	String transformer.
*
* @param {String} str - string to be transformed.
* @returns {String} transformed string
*/
function transform( str ) {
	return str + ' has been transformed.';
}

// Don't:
function transform( str ) {
	return str + ' has been transformed.';
}
```

* Do not include space indention in your multi-line comments.

``` javascript
// Do:

/**
* This is a multi-line comment.
* The comment continues and continues...
* ...until it no longer does.
*/

// Don't:

/**
 * This is a multi-line comment.
 * The comment continues and continues...
 * ...until it no longer does.
 */
```

* Use `//` for single-line comments. Place the comment above the comment subject, and place an empty line above the comment.

``` javascript
// Do:

// Set the default value to null.
var foo = bar || null;


// Don't:
var foo = bar || null; // set the default value to null.
```

* Use `// FIXME:` to annotate problems.

``` javascript
// FIXME: misses the case where value is 0. Want to check if value is not numeric.
if ( !value ) {
	return false;
}
```

* Use `// TODO:` to annotate tasks.

``` javascript
function Ctor() {

	// TODO: make `name` property value publicly accessible.
	this.name = 'foobar';

	return this;
}
```

* Do comment closing braces. Doing so helps lessen bracket hell when dealing with long code blocks.

``` javascript
function longFunction() {
	
	// [0] Do first thing.
	firstThing();

	// [1] Do second thing.
	secondThing();

	// [2] Do third thing.
	thirdThing();

	// ...

	// [N-1] Do Nth thing.
	nthThing(); 

	return true;
} // end FUNCTION longFunction()
```







## Naming

* Use camelCase for functions, objects, instances, and variables.

``` javascript
// Do:
function testFunction() {
	// Do something...
}

var myObject = {};

var myInstance = new Instance();


// Don't:
function testfunction() {
	// Do something...
}

var MyObject = {};

var reallylongvariablename = 0;
```

* Use PascalCase for constructors.

``` javascript
// Do:
function RoboRobot() {
	this.name = 'Beep';
	return this;
}

var robo = new RoboRobot();


// Don't:
function roboRobot() {
	this.name = 'Boop';
	return this;
}

var robo = new roboRobot();
```

* Use a leading underscore when naming private properties.

``` javascript
// Do:
function Robot() {
	this._private = true;
	return this;
}

// Don't:
function Robot() {
	this.__private__ = true;
	this.private_ = true;
	return this;
}
```

* When caching a reference to `this`, use `self`.

``` javascript
// Do:
function Robot() {
	var self = this;

	this.name = 'Beep';
	
	return function Robo() {
		return self;
	}
}
```

* Name all functions. Useful in stack traces.

``` javascript
// Do:
request({
	'method': 'GET',
	'uri': 'http://127.0.0.1'
}, function onResponse( error, response, body ) {
	// Do something...
});

// Don't:
request({
	'method': 'GET',
	'uri': 'http://127.0.0.1'
}, function( error, response, body ) {
	// Do something...
});
```

* Do name constants in all CAPS.

``` javascript
// Do:
var VALUE = 3.14;

// Don't:
var value = 3.14;
```





## Setters and Getters

* Where appropriate, combine set/get into a single method.

``` javascript
// Do:
Robot.prototype.name = function( name ) {
	if ( !arguments.length ) {
		return this._name;
	}
	if ( typeof name !== 'string' ) {
		throw new Error( 'name()::invalid input value.' );
	}
	this._name = name;
	return this;
}

// Don't:
Robot.prototype.setName = function( name ) {
	if ( typeof name !== 'string' ) {
		throw new Error( 'name()::invalid input value.' );
	}
	this._name = name;
	return this;
}

Robot.prototype.getName = function() {
	return this._name;
}
```




## Method Chaining

* Return `this` to enable method chaining and to create a [fluent interface](http://en.wikipedia.org/wiki/Fluent_interface).

``` javascript
function Robot() {
	this._name = '';
	this._color = 'black';
	return this;
}

Robot.prototype.name = function( name ) {
	if ( !arguments.length ) {
		return this._name;
	}
	if ( typeof name !== 'string' ) {
		throw new Error( 'name()::invalid input value.' );
	}
	this._name = name;
	return this;
}

Robot.prototype.color = function( color ) {
	if ( !arguments.length ) {
		return this._color;
	}
	if ( typeof color !== 'string' ) {
		throw new Error( 'color()::invalid input value.' );
	}
	this._color = color;
	return this;
}

var robo = new Robot();

robo.name( 'Robo' )
	.color( 'pink' );
```





## Native JavaScript

* Forgo dependence on monolithic libraries, such as jQuery, and use native JavaScript [equivalents](http://www.sitepoint.com/jquery-vs-raw-javascript-1-dom-forms/) for DOM manipulation. Relying on such libraries leads to code bloat.

``` javascript
// Do:
var el = document.querySelector( '#main' );

// Don't:
var el = $( '#main' );
```



## Performance

* Prefer simplicity and readability over performance optimization. For example,

``` javascript
// Do:
x = Math.floor( x );

// Don't: (avoid using a bitshift unless you really need to)
x >> 0;
``` 

* Take JSPerf tests with a grain of salt, as results can vary significantly from browser to browser and browser version to version.




## Documentation

* Always.

* Prefer too much to too little.

``` javascript
// Do:

/**
* FUNCTION: autocorr( vector )
*	Given an input data vector, calculate its auto-correlation. To calculate the auto-correlation using an FFT, the data is padded to have length 2^n, where `n` is the next power of 2 greater than the vector length. For more details, consult {@link http://example.com}.
*
* @param {Array} vector - 1d array
* @returns {Number} auto-correlation
*/
function autocorr( vector ) {
	// Calculate...
}


// Don't:
/**
* FUNCTION: autocorr( vector )
*	Calculates auto-correlation.
*/
function autocorr( vector ) {
	// Calculate...
}
```

* Strive to always include example/demo code that is easily runnable.

* Make your documentation __beautiful__. Take as much pride in your documentation as you do in your code.





## Versioning

* Use [semantic versioning](https://github.com/mojombo/semver/blob/master/semver.md) (semver) and adhere to its conventions: MAJOR.MINOR.PATCH.

``` javascript
// Do:
{
	"version": "1.23.5"
}

// Don't:
// filename: script_hmm_takes_thingy_and_makes_another_thingy_2000-01-01_version12_updated.js
```




## Additional Resources

* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
* [Idiomatic.js](https://github.com/rwaldron/idiomatic.js/)
* [Popular Convention](http://sideeffect.kr/popularconvention/#javascript)
* [Unix Philosophy](http://www.faqs.org/docs/artu/ch01s06.html)
* [Semantic Versioning](https://github.com/mojombo/semver/blob/master/semver.md)
